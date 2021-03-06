import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER, LOGIN, LOGOUT } from "../constants";
import { Register, Login } from "../services/AuthService";
import { showToast } from "../components/Toast/toast";

export const RegisterAction = (register, navigation) => async (dispatch) => {
  try {
    const { data } = await Register(register);
    dispatch({ type: REGISTER, payload: data });
    navigation.replace("Login");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const LoginAction = (login, navigation) => async (dispatch) => {
  try {
    const { data } = await Login(login);
    dispatch({ type: LOGIN, payload: data });
    await AsyncStorage.setItem("token", JSON.stringify(data));
    if (data?.user?.role === "user") {
      await navigation.replace("Home");
    } else if (data?.user?.role === "worker") {
      await navigation.replace("Workers");
    } else if (data?.user?.role === "admin") {
      await navigation.replace("Admin");
    } else if (data?.user?.role === "delivery") {
      await navigation.replace("Delivery");
    }
  } catch (err) {
    showToast(err.response.data.error);
  }
};

export const UserAction = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const data = await JSON.parse(token);
    dispatch({ type: "USER", payload: data.user });
  } catch (err) {
    console.log(err);
  }
};

export const logout = (navigation) => async (dispatch) => {
  await AsyncStorage.removeItem("token").then(() => {
    navigation.replace("Login");
  });
  dispatch({ type: LOGOUT, payload: null });
};
