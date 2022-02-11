import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  ScrollView,
  Box,
  Avatar,
  Button,
  HStack,
  Divider,
} from "native-base";
import { useDispatch } from "react-redux";
import {
  UpdateOrderAction,
  GetOrderAction,
  AllOrderAction,
} from "../../actions/OrderAction";
import { ShowSpinner, HideSpinner } from "../../actions/CommonAction";
import {
  Delivered,
  Out_of_Delivery,
  Dispatch,
} from "../../utils/Tracking";

const DeliveryDetails = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { data, id } = props.route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Order ID - ${id}`,
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: "#EDC126",
      },
    });
  }, [navigation]);

  const BuyProduct = async () => {
    const orders = {
      tracking: Out_of_Delivery,
      outTime: new Date(),
    };
    await dispatch(UpdateOrderAction(id, orders));
    await dispatch(AllOrderAction());
    navigation.goBack();
  };
  const DeliveredBtn = async () => {
    const orders = {
      tracking: Delivered,
      deliveredTime: new Date(),
    };
    await dispatch(ShowSpinner());
    await dispatch(UpdateOrderAction(id, orders));
    await dispatch(GetOrderAction());
    await dispatch(AllOrderAction());
    await dispatch(HideSpinner());
    navigation.goBack();
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
          {data?.tracking === Dispatch ? (
            <Button
              onPress={BuyProduct}
              variant="outline"
              marginLeft="auto"
              size="sm"
              height={9}
              pl={6}
              pr={5}
              borderColor="primary.50"
              color="primary.50"
              borderWidth={2}
              _pressed={{ bgColor: "gray.50" }}
            >
              <Text color="primary.50" fontFamily="NunitoSans-Regular">
                {"Buy Now"}
              </Text>
            </Button>
          ) : null}
        </View>
        {data?.tracking === Out_of_Delivery ? (
          <Button
            variant="outline"
            marginLeft="auto"
            marginTop={-8}
            size="sm"
            borderColor="success.100"
            borderWidth={2}
            _pressed={{ bgColor: "success.100" }}
            onPress={DeliveredBtn}
          >
            <Text color="primary.50" fontFamily="NunitoSans-Regular">
              {"Delivered"}
            </Text>
          </Button>
        ) : null}
        <Divider my={4} bg="gray.50" />
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

DeliveryDetails.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default DeliveryDetails;

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
