import React from "react";
import { ScrollView, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, Text, Box, Stack, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../components/Toast/toast";
import { CartAction } from "../../actions/CartAction";

const Details = (props) => {
  const { navigation } = props;
  const { data } = props.route.params;
  const dispatch = useDispatch();
  navigation.setOptions(
    {
      headerStyle: {
        backgroundColor: "#8D3DAF",
      },
      headerTitle: <Text color="#fff">{data.recipe.label}</Text>,
      headerTintColor: "#fff",
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="cart-outline"
            size={28}
            color="#fff"
            style={{ marginRight: 25 }}
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      ),
    },
    [navigation]
  );

  return (
    <ScrollView>
      <Image
        resizeMode="cover"
        source={{ uri: data.recipe.image }}
        style={{ height: 350 }}
      />
      <Box rounded="lg" maxWidth="100%" height={400}>
        <Stack space={5} p={[4, 4, 4]} top={4}>
          <Text
            left={3}
            fontFamily="NunitoSans-Black"
            fontSize={22}
            noOfLines={2}
            isTruncated={true}
          >
            {data?.recipe?.label}
          </Text>

          <Text
            left={3}
            color="gray.400"
            isTruncated={true}
            fontFamily="NunitoSans-Regular"
            fontSize={16}
          >
            {data?.recipe?.source}
          </Text>
          <Text left={3} noOfLines={1} bold>
            {data?.recipe?.totalWeight}
          </Text>
          <Button
            onPress={() => {
              dispatch(CartAction({ food: data }));
              showToast(data?.recipe?.label);
            }}
            bg={"#E8BD0D"}
            colorScheme="secondary"
            w={200}
            ml={75}
            mt={75}
            my={20}
            shadow={2}
            borderRadius={40}
            startIcon={
              <Icon as={Ionicons} name="cart-outline" color="#fff" size={6} />
            }
          >
            <Text
              left={1}
              fontSize={20}
              noOfLines={2}
              color="#fff"
              isTruncated={true}
            >
              Add to Cart
            </Text>
          </Button>
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default Details;

/* <Button
        title="cart"
        onPress={() => dispatch(CartAction({ food: data }))}
      /> */
