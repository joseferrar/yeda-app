import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { FlatList, View } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetProductAction } from "../../../actions/AdminAction";
import { FoodCard } from "../../../components/Cards/FoodCard";

const Products = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  return (
    <View style={styles.container}>
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
          <FoodCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

Products.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  row: {
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default Products;
