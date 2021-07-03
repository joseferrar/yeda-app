import React, { useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Protected = (props) => {
  const { navigation } = props;
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.replace("Home");
    } else {
      navigation.replace("Login");
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Protected;
