import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Box, Divider, Avatar, Text, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import ProfileCard from "../Profile/ProfileCard";
import { GetProfileAction } from "../../actions/ProfileAction";
import { Processing } from "../../utils/Tracking";
import { AddOrderAction, GetOrderAction } from "../../actions/OrderAction";

const Orders = (props) => {
  const { navigation } = props;
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const { data, quantity } = props.route.params;
  const nf = new Intl.NumberFormat();

  useEffect(() => {
    dispatch(GetProfileAction());
  }, []);

  const orders = {
    ...data,
    quantity: quantity,
    rate: 1250,
    profile: profile,
    tracking: Processing,
  };

  console.log(orders);
  const addOrder = async () => {
    await dispatch(AddOrderAction({ order: orders }));
    await dispatch(GetOrderAction());
    navigation.goBack();
  };
  return (
    <View>
      {/* <Text>
        Orders - {orders.quantity} - {orders.recipe.label}
      </Text> */}
      <Box style={{ backgroundColor: "#fff" }}>
        <VStack space={2}>
          <Box px={4} pt={4} pb={4} bg="#E03B8B">
            <Text fontSize={18} color="#fff" fontWeight="bold">
              Confirm your order:
            </Text>
          </Box>
          <Box px={5} flexDirection="row">
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
          <Divider />
        </VStack>
      </Box>
      <ProfileCard profile={profile} navigation={navigation} />

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
        startIcon={
          <Ionicons name={"briefcase-outline"} color="#fff" size={28} />
        }
        onPress={addOrder}
      >
        <Text style={styles.buttonText}>Confirm Your Order</Text>
      </Button>
    </View>
  );
};

export default Orders;

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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
