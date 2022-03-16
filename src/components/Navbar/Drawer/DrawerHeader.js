import * as React from "react";
import PropTypes from "prop-types";
import { useColorMode } from "native-base";
import { Text, View } from "react-native";
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
  const { colorMode } = useColorMode();
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              {t("Yeda")}
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={35}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginLeft: 10 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 25,
                  fontSize: 18,
                  color: colorMode === "dark" ? "#000" : "#fff",
                }}
              >
                {i18n.language}
              </Text>
              <Ionicons
                name="notifications-outline"
                size={28}
                color={colorMode === "dark" ? "#000" : "#fff"}
                style={{ marginRight: 15 }}
                lineBreakMode="head"
              />
            </View>
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
            elevation: 8,
          },
        }}
      />
    </ShopStack.Navigator>
  );
};

export const ProfileScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              {t("drawer.Profile")}
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={35}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginLeft: 10 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={30}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginRight: 15 }}
              lineBreakMode="head"
              onPress={() => dispatch(logout(navigation))}
            />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
            elevation: 0,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};

export const CategoriesStackScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="All Category"
        component={Categories}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              {t("drawer.All Category")}
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={35}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginLeft: 10 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
            elevation: 0,
          },
        }}
      />
    </CategoriesStack.Navigator>
  );
};

export const CartStackScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              {t("drawer.Cart")}
            </Text>
          ),
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginLeft: 12 }}
              lineBreakMode="head"
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
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
  const { colorMode } = useColorMode();
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Orders"
        component={MyOrder}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              {t("drawer.Orders")}
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={35}
              color={colorMode === "dark" ? "#000" : "#fff"}
              style={{ marginLeft: 10 }}
              lineBreakMode="head"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
            elevation: 0,
          },
        }}
      />
      <OrderStack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                color: colorMode === "dark" ? "#000" : "#fff",
              }}
            >
              Order Details
            </Text>
          ),
          headerStyle: {
            backgroundColor: colorMode === "dark" ? "#EDC126" : "#242B2E",
            elevation: 0,
          },
        }}
      />
    </OrderStack.Navigator>
  );
};

ShopStackScreen.propTypes = {
  navigation: PropTypes.object,
};
ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
CategoriesStackScreen.propTypes = {
  navigation: PropTypes.object,
};
CartStackScreen.propTypes = {
  navigation: PropTypes.object,
};
OrderStackScreen.propTypes = {
  navigation: PropTypes.object,
};
