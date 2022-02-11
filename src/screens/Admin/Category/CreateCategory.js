import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";

const CreateCategory = (props) => {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerTitle: "Create Category",
    });
  }, [navigation]);

  return (
    <View>
      <Text color={"primary.50"}>CreateCategory</Text>
    </View>
  );
};

CreateCategory.propTypes = {
  navigation: PropTypes.object,
};

export default CreateCategory;
