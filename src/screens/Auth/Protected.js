import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../../components/Spinner/Spinner";

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

  return <View>{Loading()}</View>;
};


export default Protected;
