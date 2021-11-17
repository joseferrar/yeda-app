import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../../../screens/Favorite/Favorite";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "../../../screens/Search/Search";
import {
  CartStackScreen,
  ProfileScreen,
  ShopStackScreen,
} from "../Drawer/DrawerHeader";
import { useSelector, useDispatch } from "react-redux";
import { GetCartAction } from "../../../actions/CartAction";

const Tab = createBottomTabNavigator();

const TabNavbar = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(GetCartAction());
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Shop") {
            iconName = focused ? "clipboard-outline" : "clipboard-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart-outline" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-outline" : "search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#EDC126",
        inactiveTintColor: "#fff",
        labelStyle: {
          color: "#fff",
        },
        style: {
          backgroundColor: "#000",
          elevation: 6,
          borderTopWidth: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackScreen}
        options={{ title: "Menu" }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{ tabBarBadge: cart.length }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavbar;

const styles = StyleSheet.create({});
