import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
  ScrollView,
} from "react-native";
import {
  FormControl,
  Input,
  Text,
  Button,
  Icon,
  View,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../actions/AuthAction";
import foot_logo from "../../../assets/foot_logo.jpg";

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
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <Image
        source={require("../../../assets/yeda_logo.jpeg")}
        size={120}
        marginLeft="auto"
        marginRight="auto"
        resizeMode={"contain"}
        borderRadius={100}
        top={-60}
        alt={"yeda_logo"}
      />
      <Text
        color="primary.50"
        fontWeight="bold"
        textAlign="center"
        fontSize={28}
        top={-40}
      >
        Welcome back !!!
      </Text>
      <Text color="primary.50" textAlign="center" fontSize={18} top={-40}>
        Login to continue
      </Text>
      <FormControl top={-80}>
        <View my={20}>
          <Input
            backgroundColor="#e8e6e1"
            borderWidth={0}
            borderRadius={15}
            mx={4}
            placeholder="Email"
            height={60}
            paddingTop={10}
            color={"#000"}
            InputLeftElement={
              <Icon
                as={<Ionicons name={"mail"} size={16} />}
                size="md"
                m={2}
                color="#000"
              />
            }
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <Text color="#E21717" fontSize={14} ml={6} mt={2}>
              {formik.errors.email}
            </Text>
          ) : null}
        </View>
        <View my={-10}>
          <Input
            placeholder="Password"
            backgroundColor="#e8e6e1"
            borderWidth={0}
            borderRadius={15}
            mx={4}
            height={60}
            paddingTop={10}
            color={"#000"}
            InputLeftElement={
              <Icon
                as={<Ionicons name={"lock-closed"} size={16} />}
                size="md"
                m={2}
                color="#000"
              />
            }
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <Text color="#E21717" fontSize={14} ml={6} mt={2}>
              {formik.errors.password}
            </Text>
          ) : null}
        </View>

        <Button
          onPress={formik.handleSubmit}
          bg={"secondary.200"}
          colorScheme="secondary"
          w={300}
          height={60}
          marginLeft="auto"
          marginRight="auto"
          my={20}
          shadow={2}
          borderRadius={15}
        >
          <Text
            fontSize={20}
            noOfLines={2}
            color="#fff"
            isTruncated={true}
            textTransform="uppercase"
          >
            Login
          </Text>
        </Button>
      </FormControl>
      <View flexDirection="row" marginLeft="auto" marginRight="auto" top={-120}>
        <Text style={{ color: "#000", marginLeft: 4, fontSize: 16 }}>
          Create a new account ?
        </Text>
        <Text
          style={{ color: "#fc036f", marginLeft: 5, fontSize: 16 }}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
      </View>
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
    backgroundColor: "#E07C24",
    paddingTop: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
});
