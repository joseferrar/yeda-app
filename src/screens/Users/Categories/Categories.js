import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, FlatList, View, useColorMode } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryAction } from "../../../actions/AdminAction";

const Categories = (props) => {
  const { colorMode } = useColorMode();
  const { navigation } = props;
  const { category } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);

  return (
    <View flex={1} bg={colorMode === "dark" ? "#fff" : "#242B2E"}>
      <FlatList
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator
        data={category}
        numColumns={2}
        keyExtractor={(item, key) => key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CategoryDetails", {
                category: item,
              });
            }}
          >
            <View
              ml={4}
              backgroundColor={ colorMode === "dark" ? "#f0f0f2" : "#000"  }
              style={{
                width: 160,
                margin: 10,
                elevation: 5,
              }}
            >
              <Avatar
                source={{
                  uri: item?.imgUrl,
                }}
                alt="image base"
                top={3}
                left={3.5}
                bg="transparent"
                borderColor="#fff"
                width={130}
                height={130}
              ></Avatar>

              <Stack space={1} p={[4, 4, 4]} top={0}>
                <Text
                  textAlign="center"
                  fontFamily="NunitoSans-Black"
                  color={colorMode === "dark" ? "primary.50" : "#fff"}
                  fontSize={16}
                  textTransform={"capitalize"}
                >
                  {item?.category}
                </Text>
              </Stack>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object,
};

export default Categories;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 5,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
