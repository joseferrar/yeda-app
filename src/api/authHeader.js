import AsyncStorage from "@react-native-async-storage/async-storage";

async function authHeader() {
  const token = await AsyncStorage.getItem("token");
  const data = JSON.parse(token);

  if (token) {
    return { Authorization: "Bearer " + data.token };
  } else {
    return {};
  }
}

export default authHeader;
