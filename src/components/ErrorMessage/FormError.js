import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FormError = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", top: -5 }}>
      <Ionicons name={"information-circle"} size={20} color="#E21717" />
      <Text style={styles.textError}>{children}</Text>
    </View>
  );
};

FormError.propTypes = {
  children: PropTypes.string,
};

export default FormError;

const styles = StyleSheet.create({
  textError: {
    color: "#E21717",
    marginLeft: 10,
    fontSize: 14,
  },
});
