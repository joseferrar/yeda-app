import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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
        Create a new account
      </Text>
      <FormControl top={-100}>
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
                as={<Ionicons name={"person"} size={16} />}
                size="md"
                m={2}
                color="#000"
              />
            }
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <Text color="#E21717" fontSize={14} ml={6} mt={2}>
              {formik.errors.name}
            </Text>
          ) : null}
        </View>
        <View my={-12}>
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
        <View my={78}>
          <Input
            placeholder="Password"
            backgroundColor="#e8e6e1"
            borderWidth={0}
            borderRadius={15}
            mx={4}
            secureTextEntry
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
          my={-12}
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
            Register
          </Text>
        </Button>
      </FormControl>
      <View flexDirection="row" marginLeft="auto" marginRight="auto" top={-30}>
        <Text style={{ color: "#000", marginLeft: 4, fontSize: 16 }}>
          Already Registered ?
        </Text>
        <Text
          style={{ color: "#fc036f", marginLeft: 5, fontSize: 16 }}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Text>
      </View>
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
    backgroundColor: "#E07C24",
    paddingTop: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
});
