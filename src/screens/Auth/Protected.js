import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../../components/Spinner/Spinner";

const Protected = (props) => {
  const { navigation } = props;
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    const data = JSON.parse(token);
    console.log(data);
    if (data?.user?.role === "user") {
      await navigation.replace("Home");
    } else if (data?.user?.role === "worker") {
      await navigation.replace("Workers");
    } else if (data?.user?.role === "delivery") {
      await navigation.replace("Delivery");
    } else if (data?.user?.role === "admin") {
      await navigation.replace("Admin");
    } else {
      await navigation.replace("Login");
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return <View>{Loading()}</View>;
};

Protected.propTypes = {
  navigation: PropTypes.object,
};

export default Protected;
