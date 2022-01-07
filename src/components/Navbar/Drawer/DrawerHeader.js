import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../../../screens/Users/Shop/Products";
import Profile from "../../../screens/Users/Profile/Profile";
import Categories from "../../../screens/Users/Categories/Categories";
import Cart from "../../../screens/Users/Cart/Cart";
import CartDetails from "../../../screens/Users/Cart/CartDetails";
import MyOrder from "../../../screens/Users/Orders/MyOrder";
import OrderDetails from "../../../screens/Users/Orders/OrderDetails";
import { logout } from "../../../actions/AuthAction";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrderStack = createStackNavigator();

export const ShopStackScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerTitle: () => <Text style={styles.title}>{t("Yeda")}</Text>,
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
              <Text color="#000" style={{ marginRight: 25, fontSize: 18 }}>
                {i18n.language}
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
};

export const ProfileScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <Text style={styles.title}>{t("drawer.Profile")}</Text>
          ),
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={30}
              color="#000"
              style={{ marginRight: 15 }}
              lineBreakMode="head"
              onPress={() => dispatch(logout(navigation))}
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
};

export const CategoriesStackScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="All Category"
        component={Categories}
        options={{
          headerTitle: () => (
            <Text style={styles.title}>{t("drawer.All Category")}</Text>
          ),
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
    </CategoriesStack.Navigator>
  );
};

export const CartStackScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: () => (
            <Text style={styles.title}>{t("drawer.Cart")}</Text>
          ),
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
};

export const OrderStackScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Orders"
        component={MyOrder}
        options={{
          headerTitle: () => (
            <Text style={styles.title}>{t("drawer.Orders")}</Text>
          ),
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
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "left",
    color: "#000",
  },
});
