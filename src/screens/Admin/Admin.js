import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { logout } from "../../actions/AuthAction";
import { useSelector, useDispatch } from "react-redux";

const Admin = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Admin</Text>
      <Text  onPress={() => dispatch(logout(navigation))}>logout</Text>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({});
