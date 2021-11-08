import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Box,
  Avatar,
  Fab,
  Icon,
  Button,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";

const AllProduct = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerLeft: () => null,
      headerTintColor: "#fff",
    });
  }, [navigation]);

  console.log(data);

  return (
    <View flex={1}>
      <FlatList
        refreshing={loading}
        onRefresh={GetProductAction}
        data={data}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            // onPress={() => {
            //   navigation.navigate("UsersDetails", {
            //     data: item,
            //   });
            // }}
          >
            <Box
              px={2}
              rounded="lg"
              marginBottom={-8}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <View flexDirection="row" top={2}>
                <Avatar
                  bg="amber.500"
                  size="xl"
                  source={{
                    uri: "https://cdn.downtoearth.org.in/library/large/2019-01-23/0.21667800_1548245196_food1.jpg",
                  }}
                >
                  AK
                </Avatar>
                <Text
                  color="primary.50"
                  fontWeight="bold"
                  fontSize={22}
                  left={2}
                  noOfLines={1}
                  w={220}
                >
                  {" "}
                  {item?.foodName}
                </Text>
                <Icon
                  color="gray.50"
                  as={<Ionicons name="chevron-forward-circle" />}
                  size="md"
                  marginLeft="auto"
                  fontWeight="bold"
                  top={26}
                />
              </View>

              <Text color="#a8abad" noOfLines={1} left={110} top={-50} w={200}>
                {item?.category}
              </Text>
              <Text
                color="success.100"
                fontWeight="bold"
                noOfLines={1}
                left={110}
                top={-40}
                w={200}
                fontSize={18}
              >
                ${item?.price}
              </Text>
            </Box>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Search")}
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          resizeMode: "contain",
          position: "absolute",
          bottom: 30,
          right: 30,
          height: 70,
          backgroundColor: "red",
          borderRadius: 100,
        }}
      >
        <Ionicons name="add-sharp" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default AllProduct;
