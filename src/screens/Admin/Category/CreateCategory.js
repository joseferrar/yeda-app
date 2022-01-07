import React, { useLayoutEffect } from "react";
import { View, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

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

export default CreateCategory;
