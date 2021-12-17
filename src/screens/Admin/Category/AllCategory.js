import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryAction } from "../../../actions/AdminAction";

const AllCategory = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);
  console.log(data);
  return (
    <View>
      <Text>AllCategory</Text>
    </View>
  );
};

export default AllCategory;

const styles = StyleSheet.create({});
