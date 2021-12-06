import React, { useLayoutEffect, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Text, Box, Stack, Badge } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { AllOrderAction } from "../../actions/OrderAction";
import { logout, UserAction } from "../../actions/AuthAction";
import {
  Cancelled,
  Delivered,
  Out_of_Delivery,
  Dispatch,
  Processing,
} from "../../utils/Tracking";

const Delivery = (props) => {
  const { navigation } = props;
  const { auth } = useSelector((state) => state.auth);
  const { order } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserAction());
    dispatch(AllOrderAction());
  }, []);
  console.log(order);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="log-out-outline"
            size={32}
            style={{ marginRight: 25 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView>
        {order.map(
          (item, index) =>
            auth?.name === item?.delivery_boy && (
              <TouchableOpacity
                activeOpacity={10}
                key={index}
                onPress={() => {
                  navigation.navigate("DeliveryDetails", {
                    data: item,
                    id: item?._id,
                  });
                }}
              >
                <Box
                  maxWidth="94%"
                  left={3}
                  top={4}
                  flexDirection="row"
                  height={165}
                >
                  <Avatar
                    size="2xl"
                    source={{
                      uri: item?.order?.image,
                    }}
                    alt="image base"
                    roundedTop="md"
                    top={5}
                    left={4}
                    bg="transparent"
                  ></Avatar>

                  <Stack space={1} p={[4, 4, 4]} top={4}>
                    <Text
                      left={3}
                      fontFamily="NunitoSans-Black"
                      color="primary.50"
                      fontSize={18}
                      w={200}
                      noOfLines={2}
                      isTruncated={true}
                    >
                      {item?.order?.foodName}
                    </Text>

                    <Text
                      left={3}
                      color="gray.500"
                      isTruncated={true}
                      fontFamily="NunitoSans-Regular"
                      fontSize={14}
                    >
                      {item?.order?.price}
                    </Text>
                    <Text left={3} noOfLines={1} bold color="primary.50">
                     {item?.order?.quantity}
                    </Text>
                    <Badge
                      bg={
                        (item?.tracking === Cancelled && "danger.100") ||
                        (item?.tracking === Delivered && "success.100") ||
                        (item?.tracking === Out_of_Delivery &&
                          "secondary.200") ||
                        (item?.tracking === Dispatch && "info.100") ||
                        (item?.tracking === Processing && "primary.50")
                      }
                      ml={1}
                      rounded="xl"
                    >
                      <Text fontWeight="bold">{item?.tracking}</Text>
                    </Badge>
                  </Stack>
                </Box>
              </TouchableOpacity>
            )
        )}
      </ScrollView>
    </View>
  );
};

export default Delivery;
