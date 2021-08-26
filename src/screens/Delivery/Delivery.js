import React, { useLayoutEffect, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Text, Box, Stack, Badge } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { AllOrderAction } from "../../actions/OrderAction";
import { logout, UserAction } from "../../actions/AuthAction";
import { Loading } from "../../components/Spinner/Spinner";

const Delivery = (props) => {
  const { navigation } = props;
  const { auth } = useSelector((state) => state.auth);
  const { loading, order } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserAction());
    dispatch(AllOrderAction());
  }, []);
  console.log(order);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="log-out-outline"
            size={32}
            color="#fff"
            style={{ marginRight: 30 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      {loading && Loading()}
      <ScrollView>
        {order.map((orderItem) =>
          orderItem?.order.map(
            (item, index) =>
              auth?.name === item?.delivery_boy && (
                <TouchableOpacity
                  activeOpacity={10}
                  key={index}
                  onPress={() => {
                    navigation.navigate("DeliveryDetails", {
                      data: item,
                      id: orderItem?._id,
                    });
                  }}
                >
                  <Box
                    maxWidth="94%"
                    left={3}
                    top={4}
                    flexDirection="row"
                    height={200}
                  >
                    <Avatar
                      size="2xl"
                      source={{
                        uri: item?.recipe?.image,
                      }}
                      alt="image base"
                      roundedTop="md"
                      top={8}
                      left={4}
                      bg="transparent"
                    ></Avatar>
                    <Text
                      bold
                      position="absolute"
                      color="primary.50"
                      left={7}
                      top={1.5}
                      p={1}
                      style={{ transform: [{ rotate: "-18deg" }] }}
                      borderRightRadius={5}
                      borderTopLeftRadius={10}
                      borderBottomRadius={15}
                      m={[4, 4, 8]}
                      bg="#fff"
                    >
                      {item?.recipe?.yield}
                      <Ionicons name={"star"} color="orange" size={16} />
                    </Text>

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
                        {item?.recipe?.label}
                      </Text>

                      <Text
                        left={3}
                        color="gray.500"
                        isTruncated={true}
                        fontFamily="NunitoSans-Regular"
                        fontSize={14}
                      >
                        {item?.recipe?.source}
                      </Text>
                      <Text left={3} noOfLines={1} bold color="primary.50">
                        No of Items: {item?.quantity}
                      </Text>
                      <Badge
                        colorScheme="gray.500"
                        ml={1}
                        rounded="xl"
                      >
                        <Text fontWeight="bold">{item?.tracking}</Text>
                      </Badge>
                    </Stack>
                  </Box>
                </TouchableOpacity>
              )
          )
        )}
      </ScrollView>
    </View>
  );
};

export default Delivery;
