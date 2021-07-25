import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { logout } from "../../actions/AuthAction";
import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
const {navigation}= props;
const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Cart')}>Search</Text>
      <Text  onPress={() => dispatch(logout(navigation))}>logout</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
