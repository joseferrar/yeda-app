import React, { useEffect, useLayoutEffect } from "react";
import { ScrollView, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, Text, Box, Stack, Button, Badge } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../components/Toast/toast";
import { AddCartAction, GetCartAction } from "../../actions/CartAction";

const Details = (props) => {
  const { navigation } = props;
  const { data } = props.route.params;
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addcart = async () => {
    await dispatch(AddCartAction({ food: data, no_of_items: 1 }));
    showToast(data?.recipe?.label);
    await dispatch(GetCartAction());
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitle: <Text color="#000">{data.recipe.label}</Text>,
      headerTintColor: "#000",
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="cart-outline"
            size={32}
            color="#000"
            style={{ marginRight: 30 }}
            onPress={() => navigation.navigate("Cart")}
          />
          <Badge
            colorScheme="dark"
            style={{
              position: "absolute",
              top: -2,
              right: 20,
              borderRadius: 15,
              backgroundColor: "#E21717",
            }}
          >
            <Text
              color="#fff"
              fontWeight="bold"
              fontSize={12}
              textAlign="center"
            >
              {cart?.length}
            </Text>
          </Badge>
        </View>
      ),
    });
  }, [navigation]);

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
            color="primary.50"
            fontSize={22}
            noOfLines={2}
            isTruncated={true}
          >
            {data?.recipe?.label}
          </Text>

          <Text
            left={3}
            color="gray.500"
            isTruncated={true}
            fontFamily="NunitoSans-Regular"
            fontSize={16}
          >
            {data?.recipe?.source}
          </Text>
          <Text left={3} noOfLines={1} bold color="primary.50">
            {data?.recipe?.totalWeight}
          </Text>
          <Button
            onPress={addcart}
            bg={"#FF6666"}
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
