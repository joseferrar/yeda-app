import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../../../screens/Shop/Products";
import Profile from "../../../screens/Profile/Profile";
import AllCategory from "../../../screens/AllCategory/AllCategory";
import Cart from "../../../screens/Cart/Cart";
import CartDetails from "../../../screens/Cart/CartDetails";
import MyOrder from "../../../screens/Orders/MyOrder";
import OrderDetails from "../../../screens/Orders/OrderDetails";
import { Feather } from "@expo/vector-icons";

const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AllCategoryStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrderStack = createStackNavigator();

export const ShopStackScreen = ({ navigation }) => (
  <ShopStack.Navigator>
    <ShopStack.Screen
      name="Shop"
      component={Shop}
      options={{
        headerTitle: () => <Text style={styles.title}>еда</Text>,
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
          <View style={{ flexDirection: "row" }}>
            <Text color="#000" style={{ marginRight: 25, fontSize: 16 }}>
              RUS
            </Text>
            <Ionicons
              name="notifications-outline"
              size={28}
              color="#000"
              style={{ marginRight: 15 }}
              lineBreakMode="head"
            />
          </View>
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#EDC126",
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
        headerTitle: () => <Text style={styles.title}>Your Profile</Text>,

        headerRight: () => (
          <Ionicons
            name="log-out-outline"
            size={30}
            color="#000"
            style={{ marginRight: 15 }}
            lineBreakMode="head"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#EDC126",
          elevation: 0,
        },
      }}
    />
  </ProfileStack.Navigator>
);

export const AllCategoryStackScreen = ({ navigation }) => (
  <AllCategoryStack.Navigator>
    <AllCategoryStack.Screen
      name="All Category"
      component={AllCategory}
      options={{
        headerTitle: () => <Text style={styles.title}>All Category</Text>,
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
  </AllCategoryStack.Navigator>
);

export const CartStackScreen = ({ navigation }) => (
  <CartStack.Navigator>
    <CartStack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerTitle: () => <Text style={styles.title}>My Cart</Text>,
        headerLeft: () => (
          <Feather
            name="arrow-left"
            size={24}
            color="#000"
            style={{ marginLeft: 12 }}
            lineBreakMode="head"
            onPress={() => navigation.goBack()}
          />
        ),
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#EDC126",
          elevation: 0,
        },
      }}
    />
    <CartStack.Screen name="CartDetails" component={CartDetails} />
  </CartStack.Navigator>
);

export const OrderStackScreen = ({ navigation }) => (
  <OrderStack.Navigator>
    <OrderStack.Screen
      name="Orders"
      component={MyOrder}
      options={{
        headerTitle: () => <Text style={styles.title}>Your Orders</Text>,
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
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#EDC126",
          elevation: 0,
        },
      }}
    />
    <OrderStack.Screen
      name="OrderDetails"
      component={OrderDetails}
      options={{
        headerTitle: () => <Text style={styles.title}>Order Details</Text>,
        headerStyle: {
          backgroundColor: "#EDC126",
          elevation: 0,
        },
      }}
    />
  </OrderStack.Navigator>
);
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "left",
    color: "#000",
  },
});
