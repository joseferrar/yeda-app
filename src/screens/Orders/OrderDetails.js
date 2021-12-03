import React, { useState, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  ScrollView,
  Box,
  Avatar,
  Flex,
  Button,
  Modal,
  HStack,
  Divider,
} from "native-base";
import { useDispatch } from "react-redux";
import { Time, DateFormet } from "../../utils/DateFormet";
import {
  Processing,
  Dispatch,
  Out_of_Delivery,
  Delivered,
  Cancelled,
} from "../../utils/Tracking";
import { showToast } from "../../components/Toast/toast";
import TimelineModal from "../../components/Modal/TimelineModal";
import { UpdateOrderAction } from "../../actions/OrderAction";

const OrderDetails = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { navigation } = props;
  const { data, id, createdAt, updatedAt } = props.route.params;
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

  const timeline1 = [
    {
      time: Time(createdAt),
      title: data?.tracking === Processing ? data?.tracking : Processing,
      description: Time(createdAt),
    },
    {
      time:
        (data?.tracking === Out_of_Delivery && Time(data?.dispatchTime)) ||
        (data?.tracking === Dispatch && Time(data?.dispatchTime)) ||
        (data?.tracking === Delivered && Time(data?.dispatchTime)),
      title:
        (data?.tracking === Out_of_Delivery && Dispatch) ||
        (data?.tracking === Dispatch && Dispatch) ||
        (data?.tracking === Delivered && Dispatch),
      description:
        (data?.tracking === Out_of_Delivery && Time(data?.dispatchTime)) ||
        (data?.tracking === Dispatch && Time(data?.dispatchTime)) ||
        (data?.tracking === Delivered && Time(data?.dispatchTime)),
    },
    {
      time:
        (data?.tracking === Out_of_Delivery && Time(data?.outTime)) ||
        (data?.tracking === Delivered && Time(data?.outTime)),
      title:
        (data?.tracking === Out_of_Delivery && Out_of_Delivery) ||
        (data?.tracking === Delivered && Out_of_Delivery),
      description:
        (data?.tracking === Out_of_Delivery && Time(data?.outTime)) ||
        (data?.tracking === Delivered && Time(data?.outTime)),
    },

    {
      time: data?.tracking === Delivered && Time(data?.deliveredTime),
      title: data?.tracking === Delivered && Delivered,
      description: data?.tracking === Delivered && Time(data?.deliveredTime),
    },
  ];

  const cancelledOrder = async () => {
    var cancelled = {
      tracking: Cancelled,
    };
    await dispatch(UpdateOrderAction(id, cancelled));
    showToast("Order Cancelled !!!");
  };

  const modalHandler = () => {
    setOpen(true);
  };

  return (
    <ScrollView style={styles.container}>
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
            onPress={modalHandler}
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
        <Button
          variant="outline"
          marginLeft="auto"
          marginTop={-8}
          size="sm"
          disabled={
            data?.tracking === Cancelled ||
            (data?.tracking === Delivered && true)
          }
          borderColor="danger.100"
          _pressed={{ bgColor: "gray.50" }}
          onPress={cancelledOrder}
        >
          <Text color="danger.100" fontFamily="NunitoSans-Regular">
            {"Cancelled"}
          </Text>
        </Button>
        <Divider my={3} bg="gray.50" />
      </Box>

      <Box px={4} rounded="lg">
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
          {`Order id - ${id}`}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular" my={1}>
          {`Time: ${Time(createdAt)}, ${DateFormet(createdAt)}`}
        </Text>
        <Divider my={2} bg="gray.50" />
      </Box>

      <Box px={4} py={1} rounded="lg">
        <Text color="primary.50" fontWeight="bold">
          {`Delivery Address:`}
        </Text>

        <Text color="gray.100" fontFamily="NunitoSans-Regular" my={0.5}>
          {data?.location?.fullName}
        </Text>
        <Text color="gray.100" fontFamily="NunitoSans-Regular">
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
      {/* <TimelineModal timeline1={timeline1} open={open} setOpen={setOpen} /> */}
    </ScrollView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  label: {
    color: "#000",
    marginLeft: "auto",
    marginBottom: "auto",
    fontFamily: "NunitoSans-Black",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
  },
});
