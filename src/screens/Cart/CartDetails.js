import React, { useState, useEffect, useLayoutEffect } from "react";
import { ScrollView, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, Text, Box, Stack, Button, Input } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../components/Toast/toast";
import {
  UpdateCartAction,
  GetCartAction,
  DeleteCartAction,
} from "../../actions/CartAction";
import { FormikConsumer, useFormik } from "formik";
import * as yup from "yup";

const CartDetails = (props) => {
  const { navigation } = props;
  const { data, id, quantity } = props.route.params;
  const dispatch = useDispatch();
  const [item, Setitem] = useState(`${quantity}`);

  const formik = useFormik({
    initialValues: {
      no_of_items: `${quantity}`,
    },

    onSubmit: async (Data) => {
      await dispatch(
        UpdateCartAction(id, {
          food: data,
          no_of_items: Data.no_of_items,
        })
      );
      await dispatch(GetCartAction());
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#8D3DAF",
      },
      headerTitle: <Text color="#fff">{data.recipe.label}</Text>,
      headerTintColor: "#fff",
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
          <View style={{ flexDirection: "row" }}>
            <Text
              marginLeft={2}
              top={4}
              noOfLines={1}
              bold
              fontSize={18}
              color="primary.50"
            >
              No of Items:
            </Text>
            <Input
              w="40%"
              mx={3}
              color="#000"
              keyboardType="number-pad"
              value={formik.values.no_of_items}
              onChangeText={formik.handleChange("no_of_items")}
              onSubmitEditing={formik.handleSubmit}
            />
          </View>

          <Button
            onPress={() => {
              dispatch(DeleteCartAction(id));
              navigation.goBack();
              showToast(data?.recipe?.label);
            }}
            bg={"#E21717"}
            colorScheme="secondary"
            my={1}
            shadow={2}
            borderRadius={40}
            startIcon={
              <Icon as={Ionicons} name="cart-outline" color="#fff" size={6} />
            }
          >
            <Text
              left={1}
              fontSize={18}
              noOfLines={2}
              color="#fff"
              isTruncated={true}
            >
              Remove to Cart
            </Text>
          </Button>

          <Button
            bg={"#000"}
            colorScheme="secondary"
            shadow={2}
            borderRadius={40}
            startIcon={
              <Icon
                as={Ionicons}
                name="briefcase-outline"
                color="#fff"
                size={6}
              />
            }
          >
            <Text left={1} fontSize={18} noOfLines={2} color="#fff">
              Proceed to Buy
            </Text>
          </Button>
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default CartDetails;

/* <Button
        title="cart"
        onPress={() => dispatch(CartAction({ food: data }))}
      /> */
