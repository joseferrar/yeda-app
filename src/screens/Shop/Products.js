import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Container,
  Box,
  Stack,
  Heading,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { FoodAction } from "../../actions/FoodAction";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food);
  //   console.log(data);

  useEffect(() => {
    dispatch(FoodAction());
  }, []);
  return (
    <View>
      <Text>Products</Text>
      <TouchableOpacity onPress={() => alert("ddfds")}>
        <Box
          shadow={0}
          rounded="lg"
          maxWidth="94%"
          left={3}
          flexDirection="row"
          height={150}
          style={{ elevation: 4 }}
        >
          <Avatar
            size="2xl"
            source={{
              uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
            alt="image base"
            roundedTop="md"
            top={3}
            left={3}
            bg="transparent"
          ></Avatar>
          {/* <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
            NEWS
          </Text> */}
          <Stack space={4} p={[4, 4, 8]}>
            <Text left={3} fontWeight="bold">
              Chikcen Pizza
            </Text>

            <Text left={3} color="gray.400" w={"14%"} isTruncated={true}>
              With lush green meadows, rivers clear as crystal, pine-covered
              hills, gorgeous waterfalls, lakes and majestic forests, the
              mesmerizing. Meghalaya is truly a Nature lover’s paradise…
            </Text>
            <Text left={3} noOfLines={1}>
              222
            </Text>
          </Stack>
        </Box>
      </TouchableOpacity>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
