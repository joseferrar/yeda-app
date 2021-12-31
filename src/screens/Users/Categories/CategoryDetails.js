import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import {
  Avatar,
  Text,
  Box,
  Stack,
  FlatList,
  Divider,
  Image,
  View,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";

const CategoryDetails = (props) => {
  const { navigation, route } = props;
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category } = route.params;

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  const filterProducts = data
    .filter((c) => c?.category === category?.category)
    .map((product) => {
      return product;
    });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${category.category} (${category.category.length})`,
      headerStyle: {
        backgroundColor: "#EDC126",
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.row}
        data={filterProducts}
        numColumns={2}
        keyExtractor={(item, key) => key.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", {
                  data: item,
                });
              }}
            >
              <View
                style={{
                  borderRightWidth: 1,
                  width: 200,
                  marginTop: -10,
                }}
                borderColor="gray.100"
              >
                <Avatar
                  source={{
                    uri: item?.image,
                  }}
                  alt="image base"
                  marginTop={5}
                  marginLeft="auto"
                  marginRight="auto"
                  bg="transparent"
                  width={130}
                  height={130}
                ></Avatar>

                <Stack p={[4, 4, 4]}>
                  <Text
                    textAlign="center"
                    fontFamily="NunitoSans-Black"
                    color="primary.50"
                    fontSize={18}
                  >
                    {item?.foodName}
                  </Text>
                  <Text
                    marginLeft="auto"
                    marginRight="auto"
                    bold
                    fontSize={14}
                    color="success.100"
                  >
                    ₽ {item?.price}
                  </Text>
                </Stack>
              </View>
              <Divider />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
