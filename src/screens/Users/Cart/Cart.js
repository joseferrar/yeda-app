import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Box, View, Button, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  GetCartAction,
  DeleteCartAction,
  UpdateCartAction,
} from "../../../actions/CartAction";

const Cart = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const Total = cart.reduce((a, c) => a + c.quantity * c.price, 0);

  useEffect(() => {
    dispatch(GetCartAction());
  }, []);

  async function increment(item) {
    await cart.map((i) => {
      if (item._id == i._id) {
        const qtyupdate = {
          ...i,
          quantity: (i.quantity += 1),
        };
        dispatch(UpdateCartAction(i._id, qtyupdate));
      }
    });
  }

  async function decrease(item) {
    await cart.map((i) => {
      if (item._id == i._id) {
        const qtyupdate = {
          ...i,
          quantity: (i.quantity -= 1),
        };
        if (i.quantity == 0) {
          dispatch(DeleteCartAction(i._id));
        }
        dispatch(UpdateCartAction(i._id, qtyupdate));
      }
    });
  }

  return (
    <ScrollView flex={1} bg="#fff">
      <View flexDirection="row" marginTop={4} marginLeft={6}>
        <Text color="primary.50" fontSize={24}>
          {"Total"}
        </Text>
        <Text color="primary.50" marginLeft={3} fontSize={16}>
          {"₽"}
        </Text>
        <Text color="primary.50" fontSize={24} fontWeight="bold">
          {Total.toFixed(2)}
        </Text>
      </View>
      <Button
      onPress={() => navigation.navigate('AddOrder', {
        data: cart,
        total: Total,
        
      })}
        _text={{ fontSize: 20, color: "#fff" }}
        height={54}
        w="96%"
        position="relative"
        size="xl"
        left={0}
        right={0}
        bottom={0}
        marginTop={4}
        marginBottom={8}
        bgColor="success.100"
        marginLeft="auto"
        marginRight="auto"
      >
        {`Proceed to checkout (${
          cart.length === 1 ? cart.length + " item" : cart.length + " items"
        })`}
      </Button>
      {cart &&
        cart?.map((item, index) => (
          <TouchableOpacity
            activeOpacity={10}
            key={index}
            onPress={() => {
              navigation.navigate("Details", {
                data: item,
              });
            }}
          >
            <Box maxWidth="94%" flexDirection="row">
              <Avatar
                size="lg"
                source={{
                  uri: item?.image,
                }}
                alt="image base"
                left={4}
                bg="transparent"
              ></Avatar>

              <Text
                left={6}
                fontFamily="NunitoSans-Black"
                color="primary.50"
                fontSize={18}
                w={200}
                noOfLines={2}
                isTruncated={true}
              >
                {item?.foodName}
              </Text>
              <Button
                _text={{ fontSize: 40, color: "#fff" }}
                fontWeight="bold"
                height={34}
                size="sm"
                top={2}
                bgColor="primary.100"
                right={14}
                marginTop={-2}
                onPress={() => decrease(item)}
              >
                -
              </Button>
              <Text
                color="primary.50"
                fontWeight="bold"
                top={1}
                right={2}
                fontSize={16}
              >
                {item?.quantity}
              </Text>
              <Button
                _text={{ fontSize: 22, color: "#fff" }}
                fontWeight="bold"
                height={34}
                size="sm"
                top={2}
                left={2}
                bgColor="primary.100"
                marginLeft="auto"
                marginTop={-2}
                onPress={() => increment(item)}
              >
                +
              </Button>
            </Box>
            <Text
              right={20}
              marginLeft="auto"
              marginRight="auto"
              color="primary.50"
              isTruncated={true}
              fontFamily="NunitoSans-Regular"
              fontSize={14}
              top={-36}
            >
              {`₽ ${item?.price}`}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default Cart;
