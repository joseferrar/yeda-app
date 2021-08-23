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
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup.string().email().required("email is required"),
      password: yup
        .string()
        .required("password is required")
        .min(8, "8 characters required"),
    }),

    onSubmit: (Data) => {
      dispatch(LoginAction(Data, navigation));
    },
  });

  const orders = {
    ...data,
    tracking: "data.tracking,",
  };
  console.log("orders", users);
  return (
    <View>
      <Box style={{ backgroundColor: "#fff" }}>
        <VStack space={3}>
          <Box px={5} flexDirection="row" top={2}>
            <Avatar
              size="2xl"
              source={{
                uri: orders?.recipe?.image,
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
              {orders?.recipe?.label}
            </Text>
          </Box>

          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Total Items:{" "}
            </Text>
            <Text fontSize={18} style={styles.rate}>
              {orders?.quantity}
            </Text>
          </Box>
          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Order total:
            </Text>
            <Text fontSize={18} style={styles.rate}>
              ₹ {nf.format(orders?.rate)}
            </Text>
          </Box>
          <Divider bgColor="#fff" />
        </VStack>
      </Box>

      <FormControl mt={4}>
        {/* <Select
          minWidth={200}
          accessibilityLabel="Select your Role"
          placeholder="Select your Role"
          color="#000"
          _selectedItem={{
            bg: "primary.50",
            endIcon: <CheckIcon size={5} />,
          }}
          mt={1}
        >
          {users?.users?.map((a, index) => (
            <Select.Item
              key={index}
              label={a?.role == "admin" && a?.name}
              value={a?.role == "admin" && a?.name}
              bg="default.50"
            />
          ))}
        </Select> */}
      </FormControl>
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
