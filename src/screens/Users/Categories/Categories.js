import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import {
  Avatar,
  Text,
  Box,
  Stack,
  FlatList,
  ScrollView,
  Image,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import {
  GetProductAction,
  GetCategoryAction,
} from "../../../actions/AdminAction";

const Categories = () => {
  const { data } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetProductAction());
    dispatch(GetCategoryAction());
  }, []);

  const numbers = [
    {
      name: "json",
      age: 12,
    },
    {
      name: "text",
      age: 15,
    },
  ];

  const number2 = [
    {
      img: "image1",
      age: 12,
    },
    {
      img: "image1",
      age: 151,
    },
  ];

  //   const converNmun = numbers.map((item, index) => {
  //     return <Text key={index}>{item.name}</Text>;
  //   });

  const compateFilters = () => {
    numbers.map((a, index) =>
      number2
        .filter((c) => c.age == a.age)
        .map((i) => {
          console.log(i);
        })
    );
    return compateFilters;
  };
  compateFilters();

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <FlatList
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator
        data={category}
        numColumns={3}
        keyExtractor={(item, key) => key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("Details", {
          //     data: item,
          //   });
          // }}
          >
            <View>
              <Avatar
                bg="purple.600"
                alignSelf="center"
                size="2xl"
                source={{ uri: item?.imgUrl }}
              >
                RB
              </Avatar>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
