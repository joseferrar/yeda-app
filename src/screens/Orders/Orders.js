import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Orders = (props) => {
  const { data, quantity } = props.route.params;

  const orders = {
    ...data,
    quantity: quantity,
  };

  console.log(orders);
  return (
    <View>
      <Text>
        Orders - {orders.quantity} - {orders.recipe.label}
      </Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
