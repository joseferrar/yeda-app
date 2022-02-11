import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar, Box, Stack, FlatList, Text, Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { SearchProductAction } from "../../../actions/AdminAction";

const Search = (props) => {
  const { navigation } = props;
  const { loading, data } = useSelector((state) => state.search);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchProductAction());
  }, []);

  const clearInput = () => {
    setSearch("");
  };
 
  console.log(data);
  return (
    <View style={styles.container}>
      <Input
        color="primary.50"
        defaultValue="12345"
        marginLeft={3}
        marginRight={3}
        borderWidth={2}
        borderRadius={12}
        _focus={{ borderWidth: 2, borderColor: "primary.100" }}
   
        placeholder="Search"
        InputLeftElement={
          <Icon
            as={<Ionicons name="search-outline" />}
            size={7}
            ml="2"
            color="primary.50"
          />
        }
        InputRightElement={
          search !== "" && (
            <Icon
              onPress={clearInput}
              as={<Ionicons name="close-outline" />}
              size={8}
              color="primary.100"
            />
          )
        }
        onChangeText={(search) => {
          dispatch(SearchProductAction(search));
          setSearch(search);
        }}
        value={search}
      />
      {search === "" ? (
        <Text style={styles.notfound}>No Results Found.</Text>
      ) : (
        <FlatList
          refreshing={loading}
          data={data}
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
                    uri: item?.image,
                  }}
                  alt="image base"
                  // roundedTop="md"
                  top={5}
                  left={4}
                  bg="transparent"
                  borderColor="#fff"
                  borderWidth={6}
                ></Avatar>

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
                    {item?.foodName}
                  </Text>

                  <Text
                    left={3}
                    color="success.100"
                    isTruncated={true}
                    fontFamily="NunitoSans-Regular"
                    fontSize={14}
                    bold
                  >
                    ₽ {item?.price}
                  </Text>
                  <Text left={3} noOfLines={1} color="gray.100">
                    {item?.category}
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

Search.propTypes = {
  navigation: PropTypes.object,
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  notfound: {
    marginTop: 240,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    color: "#000",
  },
});
