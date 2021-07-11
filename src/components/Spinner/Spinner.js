import React from "react";
import { View, StyleSheet } from "react-native";
import { Spinner } from "native-base";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Spinner size={80} color="#E21717" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 400,
  },
});
