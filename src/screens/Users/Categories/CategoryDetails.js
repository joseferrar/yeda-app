import React, { useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, FlatList, View, useColorMode } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";

const CategoryDetails = (props) => {
  const { colorMode } = useColorMode();
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
      headerTitle: (
        <Text color={colorMode === "dark" ? "primary.50" : "#fff"}>
          {`${category?.category} (${filterProducts.length})`}
        </Text>
      ),
      headerTintColor: colorMode === "dark" ? "#000" : "#fff",
      headerStyle: {
        backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
      },
    });
  }, [navigation]);

  return (
    <View flex={1} bg={colorMode === "dark" ? "#fff" : "#242B2E"}>
      <FlatList
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
                  width: 200,
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
                  width={150}
                  height={150}
                ></Avatar>

                <Stack p={[4, 4, 4]}>
                  <Text
                    textAlign="center"
                    fontFamily="NunitoSans-Black"
                    color={colorMode === "dark" ? "primary.50" : "#fff"}
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
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

CategoryDetails.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default CategoryDetails;
