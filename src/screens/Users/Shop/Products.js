import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { FlatList, View, useColorMode } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";
import { FoodCard } from "../../../components/Cards/FoodCard";

const Products = (props) => {
  const { colorMode } = useColorMode();
  const { navigation } = props;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorMode === "dark" ? "#0000" : "#242B2E",
      }}
    >
      {/* <Text
        color="primary.50"
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginTop={4}
        textTransform="uppercase"
      >
        Hello
      </Text> */}
      <FlatList
        columnWrapperStyle={styles.row}
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <FoodCard item={item} navigation={navigation} colorMode={colorMode} />
        )}
      />
    </View>
  );
};

Products.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default Products;
