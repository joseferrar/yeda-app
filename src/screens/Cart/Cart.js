import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Box, View, Button, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  GetCartAction,
  DeleteCartAction,
  UpdateCartAction,
} from "../../actions/CartAction";
import { Loading } from "../../components/Spinner/Spinner";
const Cart = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, cart } = useSelector((state) => state.cart);

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
        dispatch(GetCartAction());
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
        dispatch(GetCartAction());
      }
    });
  }

  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
      console.log("total", x);
    });
    var subTotalFormatted = parseFloat(x).toFixed(2);
    return subTotalFormatted;
  }

  return (
    <ScrollView flex={1}>
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
            <Box maxWidth="94%" top={4} flexDirection="row">
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
                _text={{ fontSize: 40 }}
                fontWeight="bold"
                height={42}
                size="sm"
                top={2}
                bgColor="gray.50"
                right={14}
                marginTop={-2}
                onPress={() => decrease(item)}
              >
                -
              </Button>
              <Text color="primary.50" top={2} right={2} fontSize={18}>
                {item?.quantity}
              </Text>
              <Button
                _text={{ fontSize: 26 }}
                fontWeight="bold"
                height={42}
                size="sm"
                top={2}
                left={2}
                bgColor="gray.50"
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
              top={-12}
            >
              {`₽ ${item?.price}`}
            </Text>
            {/* <Button title="+" onPress={() => increment(item)} />
              <Button title="-" onPress={() => decrease(item)} />
              <Button
                title={`delete`}
                onPress={() => {
                  dispatch(DeleteCartAction(item?._id));
                }}
              /> */}
          </TouchableOpacity>
        ))}
      <Text color="primary.50">{total()}</Text>
    </ScrollView>
  );
};

export default Cart;
