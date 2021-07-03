import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../../../screens/Search/Search";
import Favorite from "../../../screens/Favorite/Favorite";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Favorite") {
            iconName = focused ? "easel" : "easel";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1C8D73",
        inactiveTintColor: "gray",
        labelStyle: {
          display: "none",
        },
        style: {
          backgroundColor: "#fff",
          elevation: 4,
          borderTopWidth: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export default TabNavbar;

const styles = StyleSheet.create({});
