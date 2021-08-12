import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const UsersDetails = (props) => {
  const { navigation } = props;
  const { data } = props.route.params;
  console.log(data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: data.name,
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  return (
    <View>
      <Text>UsersDetails</Text>
    </View>
  );
};

export default UsersDetails;

const styles = StyleSheet.create({});
