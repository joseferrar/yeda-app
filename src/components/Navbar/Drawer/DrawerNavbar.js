import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profileinfo from "../../../screens/Profile/ProfileInfo";
import {
  ShopStackScreen,
  ProfileScreen,
  FavoriteStackScreen,
} from "./DrawerHeader";
import TabNavbar from "../Tab/TabNavbar";
import DrawerItem from "./DrawerItem";
const DrawerNavbar = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="dashboard"
      drawerContent={(props) => <DrawerItem {...props} />}
    >
      {/* <Drawer.Screen name="dashboard" component={TabNavbar} /> */}
      {/* <Drawer.Screen name="Profile" component={Profileinfo} /> */}
      <Drawer.Screen name="Shop" component={ShopStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Favorite" component={FavoriteStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavbar;

const styles = StyleSheet.create({});
