import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../../../screens/Shop/Products";
import Profile from "../../../screens/Profile/ProfileInfo";
import Favorite from "../../../screens/Favorite/Favorite";
import Cart from "../../../screens/Cart/Cart";
import CartDetails from "../../../screens/Cart/CartDetails";

const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const CartStack = createStackNavigator();

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
            color="#000"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={35}
            color="#000"
            style={{ marginRight: 25 }}
            lineBreakMode="head"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 8,
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
            color="#000"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={35}
            color="#000"
            style={{ marginRight: 25 }}
            lineBreakMode="head"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#fff",
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
            color="#000"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={35}
            color="#000"
            style={{ marginRight: 25 }}
            lineBreakMode="head"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
        },
      }}
    />
  </FavoriteStack.Navigator>
);

export const CartStackScreen = ({ navigation }) => (
  <CartStack.Navigator>
    <CartStack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerTitle: () => <Text style={styles.title}>Cart</Text>,
        headerLeft: () => (
          <Ionicons
            name="menu-outline"
            size={35}
            color="#000"
            style={{ marginLeft: 10 }}
            lineBreakMode="head"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={35}
            color="#000"
            style={{ marginRight: 25 }}
            lineBreakMode="head"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
        },
      }}
    />
    <CartStack.Screen name="CartDetails" component={CartDetails} />
  </CartStack.Navigator>
);
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000",
  },
});
