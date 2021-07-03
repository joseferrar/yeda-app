import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../actions/AuthAction";

const LoginPage = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup.string().email().required("email is required"),
      password: yup
        .string()
        .required("password is required")
        .min(8, "8 characters required"),
    }),

    onSubmit: (Data) => {
      dispatch(LoginAction(Data, navigation));
    },
  });

  return (
    <ScrollView keyboardDismissMode="interactive" style={styles.container}>
      <View style={styles.header}></View>
      <Text>Login</Text>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <Text>{formik.errors.email}</Text>

        <FormControl.Label>Password</FormControl.Label>
        <Input
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <Text>{formik.errors.password}</Text>

        <Button onPress={formik.handleSubmit}>Login</Button>
      </FormControl>

      <Text
          style={{ color: "#fc036f", marginLeft: 4, fontSize: 16 }}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fc036f",
    paddingTop: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
  icon: {
    marginTop: -70,
    marginLeft: 120,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 5,
    marginTop: 15,
    backgroundColor: "#e8e6e1",
    borderRadius: 30,
    color: "#000",
  },
  forgot: {
    color: "blue",
    textAlign: "right",
    marginRight: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 30,
    padding: 15,
    backgroundColor: "#fc036f",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  error: {
    color: "red",
    marginLeft: 20,
    marginTop: 10,
  },
});
