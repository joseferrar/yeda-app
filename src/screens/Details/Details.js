import React, { useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Icon,
  Text,
  Box,
  Stack,
  Button,
  Badge,
  ScrollView,
  useColorMode,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { AddCartAction, GetCartAction } from "../../actions/CartAction";
import { UserAction } from "../../actions/AuthAction";

const Details = (props) => {
  const { colorMode } = useColorMode();
  const { navigation } = props;
  const { data } = props.route.params;
  const { cart } = useSelector((state) => state.cart);
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserAction());
  }, []);

  const addcart = async () => {
    await dispatch(AddCartAction(data));
    await dispatch(GetCartAction());
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
      },
      headerTitle: (
        <Text color={colorMode === "dark" ? "primary.50" : "#fff"}>
          {data?.foodName}
        </Text>
      ),
      headerTintColor: colorMode === "dark" ? "#000" : "#fff",
      headerRight: () => (
        <>
          {auth?.role == "admin" ? (
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="pencil-sharp"
                size={32}
                color={colorMode === "dark" ? "#000" : "#fff"}
                style={{ marginRight: 12 }}
                // onPress={() => navigation.navigate("Cart")}
              />
              <Ionicons
                name="trash-sharp"
                size={32}
                color={colorMode === "dark" ? "#000" : "#fff"}
                style={{ marginRight: 12 }}
                // onPress={() => navigation.navigate("Cart")}
              />
            </View>
          ) : (
            <View>
              <Ionicons
                name="cart-outline"
                size={32}
                color={colorMode === "dark" ? "#000" : "#fff"}
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
          )}
        </>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView flex={1} bg={colorMode === "dark" ? "#0000" : "#242B2E"}>
      <Image
        resizeMode="cover"
        source={{ uri: data?.image }}
        style={{ height: 350 }}
      />
      <Box rounded="lg" maxWidth="100%" height={"auto"}>
        <Stack space={3} p={[4, 4, 4]} top={4}>
          <Text
            left={3}
            fontFamily="NunitoSans-Black"
            color={colorMode === "dark" ? "primary.50" : "#fff"}
            fontSize={22}
            noOfLines={2}
            isTruncated={true}
          >
            {data?.foodName}
          </Text>
          <Text
            left={3}
            color={colorMode === "dark" ? "gray.500" : "#fff"}
            fontFamily="NunitoSans-Regular"
            fontSize={18}
          >
            {data?.category}
          </Text>
          <Text left={3} noOfLines={1} bold color="success.100" fontSize={18}>
            ₽ {data?.price}
          </Text>
          <Text
            left={3}
            color={colorMode === "dark" ? "gray.500" : "#fff"}
            fontFamily="NunitoSans-Regular"
            fontSize={16}
          >
            {data?.description}
          </Text>

          <Button
            onPress={addcart}
            bg={"#FF6666"}
            colorScheme="secondary"
            w={200}
            ml={75}
            my={2}
            marginBottom={2}
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

Details.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Details;
