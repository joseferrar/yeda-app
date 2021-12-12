import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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

          if (route.name === t("drawer.Shop")) {
            iconName = focused ? "clipboard-outline" : "clipboard-outline";
          } else if (route.name === t("drawer.Cart")) {
            iconName = focused ? "cart-outline" : "cart-outline";
          } else if (route.name === t("drawer.Profile")) {
            iconName = focused ? "person-outline" : "person-outline";
          } else if (route.name === t("tab.Search")) {
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
          height: 56,
        },
      }}
    >
      <Tab.Screen
        name={t("drawer.Shop")}
        component={ShopStackScreen}
        options={{ title: t("tab.Menu") }}
      />
      <Tab.Screen name={t("tab.Search")} component={Search} />
      <Tab.Screen
        name={t("drawer.Cart")}
        component={CartStackScreen}
        options={{ tabBarBadge: cart.length }}
      />

      <Tab.Screen name={t("drawer.Profile")} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavbar;
