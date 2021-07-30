import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../../components/Spinner/Spinner";
import { SearchAction, FoodAction } from "../../actions/FoodAction";

const Search = (props) => {
  const { navigation } = props;
  const { loading, data } = useSelector((state) => state.search);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchAction());
  }, []);

  const updateChange = (event) => {
    event.preventDefault();
    setQuery(search);
    // setSearch('') //search clear screen
    // console.log(search);
    // navigation.goBack()
  };
  // console.log(query);
  console.log(data);
  return (
    <View style={styles.container}>
      <SearchBar
        style={{ height: 50 }}
        autoFocus
        placeholder="Search here"
        onSubmitEditing={updateChange}
        returnKeyType="search"
        onIconPress={updateChange}
        onChangeText={(search) => {
          dispatch(SearchAction(search));
          setSearch(search);
        }}
        value={search}
      />
      {search === '' && Loading()}
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
