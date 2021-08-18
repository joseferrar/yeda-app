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
import Cart from "../../screens/Cart/Cart";
import Admin from "../../screens/Admin/Admin";
import UsersList from "../../screens/Admin/Users/UsersList";
import UsersDetails from "../../screens/Admin/Users/UsersDetails";
import Orders from "../../screens/Orders/Orders";

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

        <Stack.Screen
          name="Home"
          component={DrawerNavbar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Orders" component={Orders} />

        {/* Admin */}
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="UserList" component={UsersList} />
        <Stack.Screen name="UsersDetails" component={UsersDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
