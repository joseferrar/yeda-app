import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import Protected from "../../screens/Auth/Protected";
import TabNavbar from "./Tab/TabNavbar";
import DrawerNavbar from "./Drawer/DrawerNavbar";
import Search from "../../screens/Search/Search";
import Details from "../../screens/Details/Details";

const Stack = createStackNavigator();

export default function MainNavbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Protected"
          component={Protected}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavbar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
