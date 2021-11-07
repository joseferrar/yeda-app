import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";

const AllProduct = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerLeft: () => null,
      headerTintColor: "#fff",
    });
  }, [navigation]);
  
  console.log(data);

  return (
    <View>
      <Text>AllProduct</Text>
      {data.map((item, index) => (
        <Text key={index}>{item?.foodName}</Text>
      ))}
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({});
