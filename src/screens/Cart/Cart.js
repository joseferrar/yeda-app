import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Button } from "react-native";
import { Avatar, Text, Box, Stack, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetCartAction, DeleteCartAction } from "../../actions/CartAction";
import { Loading } from "../../components/Spinner/Spinner";
const Cart = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(GetCartAction());
  }, []);

  console.log(cart)
  return (
    <View>
    
      {loading && Loading()}
      <ScrollView>
        {cart?.map((cartItem) =>
          cartItem?.food?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={10}
              key={index}
              onPress={() => {
                navigation.navigate("CartDetails", {
                  data: item,
                  id: cartItem?._id,
                  quantity: cartItem?.no_of_items,
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
                    uri: item?.image,
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
                  color="primary.50"
                  left={7}
                  top={1.5}
                  p={1}
                  // borderRadius={4}
                  style={{ transform: [{ rotate: "-18deg" }] }}
                  borderRightRadius={5}
                  borderTopLeftRadius={10}
                  borderBottomRadius={15}
                  m={[4, 4, 8]}
                  bg="#fff"
                >
                  {item?.price}
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
                    {item?.foodName}
                  </Text>

                  <Text
                    left={3}
                    color="gray.500"
                    isTruncated={true}
                    fontFamily="NunitoSans-Regular"
                    fontSize={14}
                  >
                    {item?.category}
                  </Text>
                  <Text left={3} noOfLines={1} bold color="primary.50">
                    No of Items: {cartItem?.no_of_items}
                  </Text>
                </Stack>
              </Box>
              <Button
                title="delete"
                onPress={() => {
                  dispatch(DeleteCartAction(cartItem._id));
                }}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
