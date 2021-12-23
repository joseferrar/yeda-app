import React, { useEffect } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Avatar, Text, Box, Stack, FlatList, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";
import { GetCartAction } from "../../../actions/CartAction";
import { Loading } from "../../../components/Spinner/Spinner";
import {
  Starches,
  Meat,
  Fats,
  Vegetables,
} from "../../../components/Cards/FoodCard";

const Products = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProductAction());
    // dispatch(GetCartAction())
  }, []);

  console.log(data);
  return (
    <ScrollView>
      {loading && Loading()}
      <Text
        color="primary.50"
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginTop={4}
        textTransform="uppercase"
      >
        {data[1]?.category}
      </Text>
      <FlatList
        refreshing={loading}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Starches item={item} navigation={navigation} />
        )}
      />

      <Text
        color="primary.50"
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginTop={4}
        textTransform="uppercase"
      >
        {data[2]?.category}
      </Text>

      <FlatList
        refreshing={loading}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Meat item={item} navigation={navigation} />}
      />

      <Text
        color="primary.50"
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginTop={4}
        textTransform="uppercase"
      >
        {data[4]?.category}
      </Text>
      <FlatList
        refreshing={loading}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Fats item={item} navigation={navigation} />}
      />

      <Text
        color="primary.50"
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginTop={4}
        textTransform="uppercase"
      >
        {data[5]?.category}
      </Text>
      <FlatList
        refreshing={loading}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Vegetables item={item} navigation={navigation} />
        )}
      />
    </ScrollView>
  );
};

export default Products;
