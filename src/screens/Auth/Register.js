import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
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
import { useDispatch } from "react-redux";
import { RegisterAction } from "../../actions/AuthAction";

const RegisterPage = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("username is required"),
      email: yup.string().email().required("email is required"),
      password: yup
        .string()
        .required("password is required")
        .min(8, "8 characters required"),
    }),

    onSubmit: (Data) => {
      dispatch(RegisterAction(Data, navigation));
    },
  });

  return (
    <ScrollView keyboardDismissMode="interactive" style={styles.container}>
      <View style={styles.header}></View>
      <Text>Register</Text>

      <FormControl>
        <FormControl.Label>Username</FormControl.Label>
        <Input
          color="#000"
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
        />
        <Text>{formik.errors.name}</Text>

        <FormControl.Label>Email</FormControl.Label>
        <Input
          color="#000"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <Text>{formik.errors.email}</Text>

        <FormControl.Label>Password</FormControl.Label>
        <Input
          color="#000"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <Text>{formik.errors.email}</Text>

        <Button onPress={formik.handleSubmit}>Register</Button>
      </FormControl>

      <Text
        style={{ color: "#fc036f", marginLeft: 4, fontSize: 16 }}
        onPress={() => navigation.navigate("Login")}
      >
        go to login
      </Text>
    </ScrollView>
  );
};

export default RegisterPage;

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
    marginTop: 15,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 5,
    marginTop: 10,
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
    marginTop: 5,
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
