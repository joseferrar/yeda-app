import React from "react";
import { SafeAreaView, StyleSheet, Modal } from "react-native";
import { Spinner } from "native-base";

export const Loading = () => {
  return (
    <Modal transparent={true} visible={true} style={styles.backdrop}>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <Spinner size={80} color="#E21717" />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
