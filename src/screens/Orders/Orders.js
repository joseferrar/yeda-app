import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Box, Divider, Avatar, Text } from "native-base";
import ProfileCard from "../Profile/ProfileCard";
import { useSelector, useDispatch } from "react-redux";
import { GetProfileAction } from "../../actions/ProfileAction";

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
  };

  console.log(orders);
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
      <ProfileCard profile={profile} navigation={navigation}/>
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
});
