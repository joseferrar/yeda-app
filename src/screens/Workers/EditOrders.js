import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  ScrollView,
  Box,
  Avatar,
  Flex,
  Button,
  HStack,
  VStack,
  Divider,
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
import { ShowSpinner, HideSpinner } from "../../actions/CommonAction";
import {
  Processing,
  Dispatch,
  Out_of_Delivery,
  Delivered,
} from "../../utils/Tracking";

const EditOrders = (props) => {
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const { navigation } = props;
  const { data, id } = props.route.params;
  console.log("data", data);
  console.log("id", id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Order ID - ${id}`,
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, [navigation]);

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
        tracking: Dispatch,
        delivery_boy: Data.delivery_boy,
        dispatchTime: new Date(),
      };
      await dispatch(ShowSpinner());
      await dispatch(UpdateOrderAction(id, orders));
      await dispatch(GetOrderAction());
      await dispatch(AllOrderAction());
      await dispatch(HideSpinner());
      navigation.goBack();
    },
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box px={4} py={2} rounded="lg" my={0}>
        <View flexDirection="row" top={2}>
          <Avatar
            size="xl"
            mr={3}
            bg="#000"
            source={{
              uri: data?.order?.image,
            }}
          ></Avatar>
          <Text
            color="primary.50"
            w={140}
            fontWeight="bold"
            noOfLines={2}
            marginTop={4}
            fontSize={20}
          >
            {" "}
            {data?.order?.foodName}
          </Text>
          <Button
            // onPress={modalHandler}
            variant="outline"
            marginLeft="auto"
            size="sm"
            height={9}
            pl={6}
            pr={5}
            borderColor="primary.50"
            color="primary.50"
            _pressed={{ bgColor: "gray.50" }}
          >
            <Text color="primary.50" fontFamily="NunitoSans-Regular">
              {"Track"}
            </Text>
          </Button>
        </View>
        <Divider my={4} bg="gray.50" />
      </Box>

      {data?.tracking === Processing && (
        <Box px={4} rounded="lg">
          <Text color="primary.50" fontWeight="bold">
            {`Assign Delivery Boy:`}
          </Text>
          <FormControl mt={2}>
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
                    data?.tracking === Out_of_Delivery
                      ? "default.50"
                      : "primary.50"
                  }
                  _selectedItem={{
                    bg: "primary.50",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt={1}
                  selectedValue={formik.values.delivery_boy}
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
            mt={5}
            bg={"#000"}
            colorScheme="secondary"
            shadow={2}
            borderRadius={10}
            marginRight="auto"
            marginLeft="auto"
            onPress={formik.handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Button>
          <Divider my={2} bg="gray.50" />
        </Box>
      )}
      {data?.tracking === Dispatch && (
        <Box px={4} rounded="lg">
          <Text color="primary.50" fontWeight="bold">
            {`Delivery Man:`}
          </Text>
          <Text color="gray.100" fontFamily="NunitoSans-Regular" my={1}>
            {`${data?.delivery_boy}`}
          </Text>
          <Divider my={2} bg="gray.50" />
        </Box>
      )}

      <Box px={4} py={1} rounded="lg">
        <Text color="primary.50" fontWeight="bold">
          {`Delivery Address:`}
        </Text>

        <Text color="gray.100" fontFamily="NunitoSans-Regular" my={1}>
          {data?.location?.address1}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
          {data?.location?.address2}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
          {data?.location?.city}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
          {data?.location?.pinCode}
        </Text>

        <Divider my={2} bg="gray.50" />
      </Box>

      <Box px={4} py={1} rounded="lg">
        <HStack>
          <Text color="primary.50" fontWeight="bold">
            {`Item Name`}
          </Text>
          <Text color="primary.50" fontWeight="bold" marginLeft="auto">
            {`Quantity`}
          </Text>
          <Text color="primary.50" fontWeight="bold" marginLeft="auto">
            {`Price`}
          </Text>
        </HStack>

        <HStack my={1}>
          <Text
            color="gray.100"
            fontFamily="NunitoSans-Regular"
            style={{ width: 80 }}
          >
            {data?.order?.foodName}
          </Text>
          <Text
            color="gray.100"
            fontFamily="NunitoSans-Regular"
            marginLeft="auto"
          >
            {data?.order?.quantity}
          </Text>
          <Text
            color="gray.100"
            fontFamily="NunitoSans-Regular"
            marginLeft="auto"
          >
            {data?.order?.price}
          </Text>
        </HStack>
        <Divider my={2} bg="gray.50" />
      </Box>

      <Box px={4}>
        <HStack>
          <Text color="primary.50" fontWeight="bold">
            {`Product ID`}
          </Text>
          <Text color="primary.50" fontWeight="bold" marginLeft="auto">
            {`Category`}
          </Text>
        </HStack>

        <HStack my={2}>
          <Text color="gray.100" fontFamily="NunitoSans-Regular">
            {data?.order?._id}
          </Text>
          <Text
            color="gray.100"
            fontFamily="NunitoSans-Regular"
            marginLeft="auto"
          >
            {data?.order?.category}
          </Text>
        </HStack>
        <Divider my={2} bg="gray.50" />
        <Text color="primary.50" fontWeight="bold" my={1}>
          {`Description:`}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
          {data?.order?.description}
        </Text>

        <Divider my={2} bg="gray.50" />
      </Box>
    </ScrollView>
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
