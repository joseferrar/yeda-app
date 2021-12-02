import React, { useEffect, useLayoutEffect } from "react";
import { View, TouchableOpacity, ScrollView, Button } from "react-native";
import { Avatar, Text, Box, Stack, Badge } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { AllOrderAction } from "../../actions/OrderAction";
import { Loading } from "../../components/Spinner/Spinner";
import { Cancelled } from "../../utils/Tracking";

const AllOrders = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, order } = useSelector((state) => state.order);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Orders",
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerLeft: () => null,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(AllOrderAction());
  }, []);
  console.log("....Order", order);
  return (
    <View>
      {loading && Loading()}
      <ScrollView>
        {order?.map((item, index) => (
          <TouchableOpacity
            activeOpacity={10}
            key={index}
            onPress={() => {
              navigation.navigate("EditOrders", {
                data: item,
                id: item?._id,
                createdAt: item?.createdAt,
                updatedAt: item?.updatedAt,
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
                  No of Items: {item?.order?.quantity}
                </Text>
                <Badge
                  bg={
                    item?.tracking === Cancelled ? "danger.100" : "primary.50"
                  }
                  ml={1}
                  rounded="xl"
                >
                  <Text fontWeight="bold">{item?.tracking}</Text>
                </Badge>
              </Stack>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllOrders;
