import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Text, Box, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { FoodAction } from "../../actions/FoodAction";
import { Loading } from "../../components/Spinner/Spinner";

const Products = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(FoodAction());
  }, [dispatch]);
  return (
    <View>
      {loading && Loading()}
      <ScrollView>
        {data?.hits?.map((item) => (
          <TouchableOpacity
            activeOpacity={10}
            key={item?.recipe?.label}
            onPress={() => {
              navigation.navigate("Details", {
                data: item,
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
                left={7}
                top={1.5}
                p={1}
                color="primary.50"
                // borderRadius={4}
                style={{ transform: [{ rotate: "-18deg" }] }}
                borderRightRadius={5}
                borderTopLeftRadius={10}
                borderBottomRadius={15}
                m={[4, 4, 8]}
                bg="#fff"
              >
                5
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
                  color="gray.400"
                  isTruncated={true}
                  fontFamily="NunitoSans-Regular"
                  fontSize={14}
                >
                  {item.recipe.source}
                </Text>
                <Text left={3} noOfLines={1} bold w={75} color="primary.50">
                  {item?.recipe?.totalWeight}
                </Text>
              </Stack>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Products;
