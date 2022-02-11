import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, FlatList, View } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryAction } from "../../../actions/AdminAction";

const Categories = (props) => {
  const { navigation } = props;
  const { category } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);

  return (
    <View style={styles.container}>
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
              backgroundColor={"#f0f0f2"}
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
                  color="primary.50"
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
