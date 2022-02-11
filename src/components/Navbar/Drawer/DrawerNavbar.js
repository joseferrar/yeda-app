import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ProfileScreen,
  CategoriesStackScreen,
  CartStackScreen,
  OrderStackScreen,
} from "./DrawerHeader";
import TabNavbar from "../Tab/TabNavbar";
import DrawerItem from "./DrawerItem";
const DrawerNavbar = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Shop"
      drawerContent={(props) => <DrawerItem {...props} />}
    >
      <Drawer.Screen name="Shop" component={TabNavbar} />
      <Drawer.Screen name="All Category" component={CategoriesStackScreen} />
      {/* <Drawer.Screen name="Shop" component={ShopStackScreen} /> */}
      <Drawer.Screen name="Profile" component={ProfileScreen} />

      <Drawer.Screen name="Cart" component={CartStackScreen} />
      <Drawer.Screen name="Orders" component={OrderStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavbar;
