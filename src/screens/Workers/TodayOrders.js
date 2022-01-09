import React, { useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, ScrollView } from "react-native";
import { View, Avatar, Text, Box, Stack, Badge } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { AllOrderAction } from "../../actions/OrderAction";
import { Loading } from "../../components/Spinner/Spinner";
import {
  Cancelled,
  Delivered,
  Out_of_Delivery,
  Dispatch,
  Processing,
} from "../../utils/Tracking";
import { DateFormet } from "../../utils/DateFormet";

const TodayOrders = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, order } = useSelector((state) => state.order);
  const date = new Date();
  const todayDate = DateFormet(date);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Today Orders",
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
    <View flex={1} bg="#fff">
      {loading && Loading()}
      <ScrollView>
        {order?.map(
          (item, index) =>
            todayDate === DateFormet(item?.createdAt) && (
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

TodayOrders.propTypes = {
  navigation: PropTypes.object,
};

export default TodayOrders;
