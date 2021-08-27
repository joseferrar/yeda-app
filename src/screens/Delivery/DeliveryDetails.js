import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  VStack,
  Box,
  Divider,
  Avatar,
  Text,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateOrderAction,
  GetOrderAction,
  AllOrderAction,
} from "../../actions/OrderAction";
import { ShowSpinner, HideSpinner } from "../../actions/CommonAction";
import { Dispatch, Delivered, Out_of_Delivery } from "../../utils/Tracking";

const DeliveryDetails = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { data, id } = props.route.params;
  const nf = new Intl.NumberFormat();

  const BuyProduct = async () => {
    const orders = {
      ...data,
      tracking: Out_of_Delivery,
      dispatchTime: data?.dispatchTime,
      outTime: new Date(),
    };
    await dispatch(ShowSpinner());
    await dispatch(UpdateOrderAction(id, { order: orders }));
    await dispatch(GetOrderAction());
    await dispatch(AllOrderAction());
    await dispatch(HideSpinner());
    navigation.goBack();
  };
  const DeliveredBtn = async () => {
    const orders = {
      ...data,
      tracking: Delivered,
      dispatchTime: data?.dispatchTime,
      outTime: data?.outTime,
      deliveredTime: new Date(),
    };
    await dispatch(ShowSpinner());
    await dispatch(UpdateOrderAction(id, { order: orders }));
    await dispatch(GetOrderAction());
    await dispatch(AllOrderAction());
    await dispatch(HideSpinner());
    navigation.goBack();
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", }}>
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
          <Divider />
        </VStack>
      </Box>

      <View style={styles.mainCardView}>
        <View style={{ marginTop: 8 }}>
          <Box px={4} style={{ flexDirection: "row", marginTop: 8 }}>
            <Ionicons name={"location"} color="red" size={30} />
            <Text
              fontSize={16}
              style={styles.location}
            >
              Your Delivery Address
            </Text>
          </Box>

          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Country:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {data?.profile?.country}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 8 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Full Name:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {data?.profile?.fullName}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Phone:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {data?.profile?.phone}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Pin code:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {data?.profile?.pinCode}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Address line 1:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              isTruncated={true}
              numberOfLines={1}
              w={120}
              lineBreakMode="middle"
              textBreakStrategy="simple"
            >
              {data?.profile?.address1}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Address line 2:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              w={120}
              isTruncated={true}
              numberOfLines={1}
            >
              {data?.profile?.address2}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              City:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              w={120}
              isTruncated={true}
              noOfLines={1}
            >
              {data?.profile?.city}
            </Text>
          </Box>
        </View>
      </View>
      {data?.tracking === Dispatch ? (
        <Button
          size="md"
          width={300}
          mt={8}
          bg={"#000"}
          colorScheme="secondary"
          shadow={2}
          borderRadius={10}
          marginLeft={6}
          marginRight="auto"
          marginLeft="auto"
          onPress={BuyProduct}
        >
          <Text style={styles.buttonText}>Buy the Product</Text>
        </Button>
      ) : null}
      {data?.tracking === Out_of_Delivery || data?.tracking !== Delivered ? (
        <Button
          size="md"
          width={300}
          mt={8}
          bg={"#000"}
          colorScheme="secondary"
          shadow={2}
          borderRadius={10}
          marginLeft={6}
          marginRight="auto"
          marginLeft="auto"
          onPress={DeliveredBtn}
        >
          <Text style={styles.buttonText}>Delivered</Text>
        </Button>
      ) : null}
    </ScrollView>
  );
};

export default DeliveryDetails;

const styles = StyleSheet.create({
  label: {
    color: "#000",
    marginLeft: "auto",
    marginBottom: "auto",
    fontFamily: "NunitoSans-Black",
  },
  mainCardView: {
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,

    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  rate: {
    color: "#000",
    marginLeft: "auto",
    fontFamily: "NunitoSans-Regular",
  },
  location: {
    color: "blue",
    marginLeft: "auto",
    marginTop: 1,
  },
});
