import React from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Box, Divider, Avatar, Text } from "native-base";
import Timeline from "react-native-timeline-flatlist";
import { Time } from "../../utils/DateFormet";
import {
  Processing,
  Dispatch,
  Out_of_Delivery,
  Delivered,
} from "../../utils/Tracking";

const OrderDetails = (props) => {
  const { navigation } = props;
  const { data, id, createdAt, updatedAt } = props.route.params;
  console.log("data", data);
  console.log("id", id);

  const timeline1 = [
    {
      time: Time(createdAt),
      title: data?.tracking === Processing ? data?.tracking : Processing,
      description: Time(createdAt),
    },
    {
      time:
        (data?.tracking === Out_of_Delivery && Time(data?.dispatchTime)) ||
        (data?.tracking === Dispatch && Time(data?.dispatchTime)) ||
        (data?.tracking === Delivered && Time(data?.dispatchTime)),
      title:
        (data?.tracking === Out_of_Delivery && Dispatch) ||
        (data?.tracking === Dispatch && Dispatch) ||
        (data?.tracking === Delivered && Dispatch),
      description:
        (data?.tracking === Out_of_Delivery && Time(data?.dispatchTime)) ||
        (data?.tracking === Dispatch && Time(data?.dispatchTime)) ||
        (data?.tracking === Delivered && Time(data?.dispatchTime)),
    },
    {
      time:
        (data?.tracking === Out_of_Delivery && Time(data?.outTime)) ||
        (data?.tracking === Delivered && Time(data?.outTime)),
      title:
        (data?.tracking === Out_of_Delivery && Out_of_Delivery) ||
        (data?.tracking === Delivered && Out_of_Delivery),
      description:
        (data?.tracking === Out_of_Delivery && Time(data?.outTime)) ||
        (data?.tracking === Delivered && Time(data?.outTime)),
    },

    {
      time: data?.tracking === Delivered && Time(data?.deliveredTime),
      title: data?.tracking === Delivered && Delivered,
      description: data?.tracking === Delivered && Time(data?.deliveredTime),
    },
  ];

  return (
    <View style={styles.container}>
      <Box>
        <VStack space={2}>
          <Box px={1} flexDirection="row">
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
        </VStack>
      </Box>
      <Text fontSize={22} top={6} w={200} noOfLines={2} style={styles.title}>
        Timeline
      </Text>
      <Timeline
        data={timeline1}
        style={styles.list}
        timeStyle={{
          textAlign: "center",
          backgroundColor: "#ff9797",
          color: "white",
          width: 70,
          borderRadius: 8,
          left: 2,
        }}
        lineWidth={4}
      />
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    marginTop: 40,
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
