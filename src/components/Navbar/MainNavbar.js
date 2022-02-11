import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import Protected from "../../screens/Auth/Protected";
import DrawerNavbar from "./Drawer/DrawerNavbar";
import Search from "../../screens/Users/Search/Search";
import Details from "../../screens/Details/Details";
import Admin from "../../screens/Admin/Admin";
import UsersList from "../../screens/Admin/Users/UsersList";
import UsersDetails from "../../screens/Admin/Users/UsersDetails";
import AddOrder from "../../screens/Users/Orders/AddOrder";
import AllOrders from "../../screens/Workers/AllOrders";
import EditOrders from "../../screens/Workers/EditOrders";
import Workers from "../../screens/Workers/Workers";
import Delivery from "../../screens/Delivery/Delivery";
import DeliveryDetails from "../../screens/Delivery/DeliveryDetails";
import { useSelector } from "react-redux";
import { Loading } from "../Spinner/Spinner";
import AllProduct from "../../screens/Admin/Products/AllProduct";
import CreateProduct from "../../screens/Admin/Products/CreateProduct";
import TodayOrders from "../../screens/Workers/TodayOrders";
import DeliveryBoys from "../../screens/Workers/DeliveryBoys";
import AllCategory from "../../screens/Admin/Category/AllCategory";
import CreateCategory from "../../screens/Admin/Category/CreateCategory";
import CategoryDetails from "../../screens/Users/Categories/CategoryDetails";

const Stack = createStackNavigator();

export default function MainNavbar() {
  const { loading } = useSelector((state) => state.common);

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
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AddOrder" component={AddOrder} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />

        {/* Admin */}
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="UserList" component={UsersList} />
        <Stack.Screen name="UsersDetails" component={UsersDetails} />
        <Stack.Screen name="AllProduct" component={AllProduct} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} />
        <Stack.Screen name="AllCategory" component={AllCategory} />
        <Stack.Screen name="CreateCategory" component={CreateCategory} />

        {/* Workers */}
        <Stack.Screen name="Workers" component={Workers} />
        <Stack.Screen name="AllOrders" component={AllOrders} />
        <Stack.Screen name="TodayOrders" component={TodayOrders} />
        <Stack.Screen name="EditOrders" component={EditOrders} />
        <Stack.Screen name="DeliveryBoys" component={DeliveryBoys} />

        {/* Delivery */}
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
      </Stack.Navigator>
      {loading && Loading()}
    </NavigationContainer>
  );
}
