import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../../../screens/Shop/Products";
import Profile from "../../../screens/Profile/ProfileInfo";
import Favorite from "../../../screens/Favorite/Favorite";

const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavoriteStack = createStackNavigator();

export const ShopStackScreen = ({ navigation }) => (
  <ShopStack.Navigator>
    <ShopStack.Screen
      name="Shop"
      component={Shop}
      options={{
        headerTitle: () => <Text style={styles.title}>Shop</Text>,
        headerLeft: () => (
          <Ionicons
            name="menu-outline"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="search-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 25 }}
              lineBreakMode="head"
              onPress={() => navigation.navigate("Search")}
            />
            <Ionicons
              name="cart-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 15 }}
              lineBreakMode="head"
              onPress={() => navigation.navigate("Cart")}
            />
          </View>
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#E03B8B",
          elevation: 0,
        },
      }}
    />
  </ShopStack.Navigator>
);

export const ProfileScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTitle: () => <Text style={styles.title}>Profile</Text>,
        headerLeft: () => (
          <Ionicons
            name="menu-outline"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="search-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 25 }}
              lineBreakMode="head"
              onPress={() => navigation.navigate("Search")}
            />
            <Ionicons
              name="cart-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 15 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#E03B8B",
          elevation: 0,
        },
      }}
    />
  </ProfileStack.Navigator>
);

export const FavoriteStackScreen = ({ navigation }) => (
  <FavoriteStack.Navigator>
    <FavoriteStack.Screen
      name="Favorite"
      component={Favorite}
      options={{
        headerTitle: () => <Text style={styles.title}>Favorite</Text>,
        headerLeft: () => (
          <Ionicons
            name="menu-outline"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="search-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 25 }}
              lineBreakMode="head"
              onPress={() => navigation.navigate("Search")}
            />
            <Ionicons
              name="cart-outline"
              size={35}
              color="#fff"
              style={{ marginRight: 15 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#E03B8B",
          elevation: 0,
        },
      }}
    />
  </FavoriteStack.Navigator>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#fff",
  },
});
