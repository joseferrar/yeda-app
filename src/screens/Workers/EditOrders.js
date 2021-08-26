import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  VStack,
  Box,
  Divider,
  Avatar,
  Text,
  Button,
  FormControl,
  Select,
  CheckIcon,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { GetUsersAction } from "../../actions/AdminAction";
import {
  UpdateOrderAction,
  GetOrderAction,
  AllOrderAction,
} from "../../actions/OrderAction";
import { Dispatch, Out_of_Delivery, Delivered } from "../../utils/Tracking";

const EditOrders = (props) => {
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const { navigation } = props;
  const { data, id } = props.route.params;
  const nf = new Intl.NumberFormat();
  console.log("data", data);
  console.log("id", id);

  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      delivery_boy: "",
    },

    validationSchema: yup.object({
      delivery_boy: yup.string().required("Data must be required"),
    }),

    onSubmit: async (Data) => {
      const orders = {
        ...data,
        tracking: Dispatch,
        delivery_boy: Data.delivery_boy,
        dispatchTime: new Date(),
      };
      await dispatch(UpdateOrderAction(id, { order: orders }));
      await dispatch(GetOrderAction());
      await dispatch(AllOrderAction());
      navigation.goBack();
    },
  });

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Box>
        <VStack space={3}>
          <Box px={5} flexDirection="row" top={2}>
            <Avatar
              size="2xl"
              source={{
                uri: data?.recipe?.image,
              }}
              roundedTop="md"
              left={2}
              bg="transparent"
            ></Avatar>
            <Text
              fontSize={18}
              top={6}
              w={200}
              noOfLines={2}
              style={styles.label}
            >
              {data?.recipe?.label}
            </Text>
          </Box>

          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Total Items:{" "}
            </Text>
            <Text fontSize={18} style={styles.rate}>
              {data?.quantity}
            </Text>
          </Box>
          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Order total:
            </Text>
            <Text fontSize={18} style={styles.rate}>
              ₹ {nf.format(data?.rate)}
            </Text>
          </Box>
          <Divider bgColor="#fff" />
        </VStack>
      </Box>

      <FormControl mt={4}>
        {users
          .filter((user) => user?.role === "delivery")
          .map((userData, index) => (
            <Select
              key={index}
              minWidth={200}
              accessibilityLabel="Assign Delivery Boy"
              placeholder="Assign Delivery Boy"
              isDisabled={
                data?.tracking === Out_of_Delivery ||
                (data?.tracking === Delivered && true)
              }
              color={
                data?.tracking === Out_of_Delivery ? "default.50" : "primary.50"
              }
              _selectedItem={{
                bg: "primary.50",
                endIcon: <CheckIcon size={5} />,
              }}
              mt={1}
              ml={5}
              mr={5}
              selectedValue={formik.values.delivery_boy || data?.delivery_boy}
              onValueChange={formik.handleChange("delivery_boy")}
            >
              <Select.Item
                label={userData?.name}
                value={userData?.name}
                bg="default.50"
              />
            </Select>
          ))}
      </FormControl>

      <Button
        size="md"
        width={300}
        mt={8}
        bg={"#000"}
        colorScheme="secondary"
        shadow={2}
        borderRadius={10}
        disabled={
          data?.tracking === Out_of_Delivery ||
          (data?.tracking === Delivered && true)
        }
        marginLeft={6}
        marginRight="auto"
        marginLeft="auto"
        onPress={formik.handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Button>
    </View>
  );
};

export default EditOrders;

const styles = StyleSheet.create({
  label: {
    color: "#000",
    marginLeft: "auto",
    marginBottom: "auto",
    fontFamily: "NunitoSans-Black",
  },
  rate: {
    color: "green",
    marginLeft: "auto",
    fontFamily: "NunitoSans-Regular",
  },
});
