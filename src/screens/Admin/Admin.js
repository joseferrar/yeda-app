import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../../actions/AuthAction";
import { useSelector, useDispatch } from "react-redux";
import { HStack, Stack, Center, Box, Button } from "native-base";
import AdminCard from "./AdminCard";

const Admin = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="log-out-outline"
            size={32}
            color="#fff"
            style={{ marginRight: 30 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <AdminCard navigation={navigation} />
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({});
