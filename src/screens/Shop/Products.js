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
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { FoodAction } from "../../actions/FoodAction";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food.data);
  // console.log(data.hits);
  useEffect(() => {
    dispatch(FoodAction());
  }, []);
  return (
    <View>
      {data?.hits?.map((item) => (
        <TouchableOpacity onPress={() => alert("ddfds")}>
          <Box
            shadow={4}
            rounded="lg"
            maxWidth="94%"
            left={3}
            top={4}
            flexDirection="row"
            height={158}
          >
            <Avatar
              size="2xl"
              source={{
                uri: item.recipe.image,
              }}
              alt="image base"
              roundedTop="md"
              top={4}
              left={4}
              bg="transparent"
            ></Avatar>
            <Text
              bold
              position="absolute"
              left={6}
              borderRadius={2}
              m={[4, 4, 8]}
              bg="#fff"
            >
              5
              <Ionicons name={"star"} color="orange" size={18} />
            </Text>

            <Stack space={2} p={[4, 4, 8]} top={4}>
              <Text
                left={3}
                fontFamily="NunitoSans-Black"
                fontSize={18}
                w={"15%"}
              >
                {item.recipe.label}
              </Text>

              <Text
                left={3}
                color="gray.400"
                w={"12%"}
                isTruncated={true}
                fontFamily="NunitoSans-Regular"
                fontSize={14}
              >
                With lush green meadows, rivers clear as crystal, pine-covered
                hills, gorgeous waterfalls, lakes and majestic forests, the
                mesmerizing. Meghalaya is truly a Nature lover’s paradise…
              </Text>
              <Text left={3} noOfLines={1} bold>
                {item.recipe.totalWeight}
              </Text>
            </Stack>
          </Box>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
