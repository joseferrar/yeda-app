import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Search = (props) => {
const {navigation}= props;

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Cart')}>Search</Text>

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
