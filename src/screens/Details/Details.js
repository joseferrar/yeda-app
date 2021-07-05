import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CartAction } from "../../actions/CartAction";

const Details = (props) => {
  const { data } = props.route.params;
  const dispatch = useDispatch();
  const cart = {
    food: data,
  };
  return (
    <View>
      <Text>Details</Text>
      <Button title="cart" onPress={() => dispatch(CartAction(cart))} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
