import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar, Box, Stack, FlatList, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
// import SearchBar from "react-native-dynamic-search-bar";
import { useSelector, useDispatch } from "react-redux";
import { SearchAction } from "../../../actions/FoodAction";

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
      {/* <SearchBar
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
      /> */}
      {search === "" ? (
        <Text style={styles.notfound}>No Results Found</Text>
      ) : (
        <FlatList
          refreshing={loading}
          data={data?.hits}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("Details", {
                  data: item,
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
                    uri: item?.recipe?.image,
                  }}
                  alt="image base"
                  // roundedTop="md"
                  top={5}
                  left={4}
                  bg="transparent"
                  borderColor="#fff"
                  borderWidth={6}
                ></Avatar>
                <Text
                  bold
                  position="absolute"
                  left={7}
                  top={1.5}
                  p={1}
                  color="primary.50"
                  // borderRadius={4}
                  style={{ transform: [{ rotate: "-18deg" }] }}
                  borderRightRadius={5}
                  borderTopLeftRadius={10}
                  borderBottomRadius={15}
                  m={[4, 4, 8]}
                  bg="#fff"
                >
                  {item?.recipe?.yield}
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
                    {item?.recipe?.label}
                  </Text>

                  <Text
                    left={3}
                    color="gray.400"
                    isTruncated={true}
                    fontFamily="NunitoSans-Regular"
                    fontSize={14}
                  >
                    {item.recipe.source}
                  </Text>
                  <Text left={3} noOfLines={1} bold w={75} color="primary.50">
                    {item?.recipe?.totalWeight}
                  </Text>
                </Stack>
              </Box>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  notfound: {
    marginTop: 240,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    color: "#000",
  },
});
