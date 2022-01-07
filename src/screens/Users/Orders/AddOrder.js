import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Box, Divider, Avatar, Text, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Processing } from "../../../utils/Tracking";
import ProfileCard from "../Profile/ProfileCard";
import { AddOrderAction } from "../../../actions/OrderAction";

const AddOrder = (props) => {
  const { navigation } = props;
  const {profile} = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { data, total } = props.route.params;

  const confirmOrder = () => {
    data.map((item) => {
      const placeOrder = {
        order: item,
        location: profile,
        tracking: Processing,
      };
      dispatch(AddOrderAction(placeOrder));
      navigation.goBack();
    });
  };

  return (
    <View>
      <Box style={{ backgroundColor: "#fff" }}>
        <VStack space={2}>
          <Box px={4} pt={4} pb={4} bg="#E03B8B">
            <Text fontSize={18} color="#fff" fontWeight="bold">
              Confirm your order:
            </Text>
          </Box>

          <Box px={5} flexDirection="row">
            <Avatar.Group size="lg" max={5}>
              {data.map((item, index) => (
                <Avatar
                  size="lg"
                  key={index}
                  bg="green.500"
                  source={{
                    uri: item?.image,
                  }}
                >
                  {item?.image}
                </Avatar>
              ))}
            </Avatar.Group>
          </Box>

          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Total Items:{" "}
            </Text>
            <Text fontSize={18} style={styles.rate}>
              {data?.length}
            </Text>
          </Box>
          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Total Quantity:{" "}
            </Text>

            {data.map((item, index) => (
              <Text fontSize={18} style={styles.rate} key={index}>
                {item?.quantity}
              </Text>
            ))}
          </Box>
          <Box px={5} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={18} color="#000" fontWeight="bold">
              Order total:
            </Text>
            <Text fontSize={18} style={styles.rate}>
              ₹ {`₽ ${total.toFixed(2)}`}
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
        marginRight="auto"
        marginLeft="auto"
        startIcon={
          <Ionicons name={"briefcase-outline"} color="#fff" size={28} />
        }
        onPress={confirmOrder}
      >
        <Text style={styles.buttonText}>Confirm Your Order</Text>
      </Button>
    </View>
  );
};

export default AddOrder;

const styles = StyleSheet.create({
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
