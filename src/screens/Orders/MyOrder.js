import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Text, Box, Stack, Badge } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetOrderAction } from "../../actions/OrderAction";
import { Loading } from "../../components/Spinner/Spinner";
const MyOrder = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(GetOrderAction());
  }, []);
  console.log("....Order", order);
  return (
    <View>
      {loading && Loading()}
      <ScrollView>
        {order?.map((orderItem) =>
          orderItem?.order?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={10}
              key={index}
              onPress={() => {
                navigation.navigate("OrderDetails", {
                  data: item,
                  id: orderItem?._id,
                  createdAt: orderItem?.createdAt,
                  updatedAt: orderItem?.updatedAt,
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
                    uri: item?.recipe?.image,
                  }}
                  alt="image base"
                  roundedTop="md"
                  top={5}
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
                  // borderRadius={4}
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
                  <Badge colorScheme="gray.500" ml={1} rounded="xl">
                    <Text fontWeight="bold">{item?.tracking}</Text>
                  </Badge>
                </Stack>
              </Box>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MyOrder;
