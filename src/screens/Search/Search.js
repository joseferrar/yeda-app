import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

const Search = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <SearchBar
        style={{ height: 50 }}
        autoFocus
        placeholder="Search here"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
