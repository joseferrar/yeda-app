import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ScrollView } from "react-native";
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
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <Image
        source={require("../../../assets/yeda_logo.png")}
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
      <View
        justifyContent="center"
        marginLeft={4}
        marginRight={4}
        alignItems="center"
      >
        <FormControl>
          <Input
            borderWidth={2}
            borderColor="primary.100"
            color="primary.50"
            fontSize={14}
            borderRadius={12}
            fontFamily="NunitoSans-Regular"
            _focus={{ borderColor: "success.100", borderWidth: 2 }}
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            InputLeftElement={
              <Icon
                as={<Ionicons name="mail-outline" />}
                size={8}
                ml="2"
                color="primary.100"
              />
            }
            InputRightElement={
              formik.errors.email &&
              formik.touched.email && (
                <Icon
                  onPress={() => alert(formik.errors.email)}
                  as={<Ionicons name="information-circle-outline" />}
                  size={6}
                  mr="2"
                  color="#D82E2F"
                />
              )
            }
            placeholder="Email"
          />

          <Input
            marginTop={8}
            borderWidth={2}
            borderColor="primary.100"
            color="primary.50"
            borderRadius={12}
            fontSize={14}
            fontFamily="NunitoSans-Regular"
            _focus={{ borderColor: "success.100", borderWidth: 2 }}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            secureTextEntry
            InputLeftElement={
              <Icon
                as={<Ionicons name="lock-closed-outline" />}
                size={8}
                ml="2"
                color="primary.100"
              />
            }
            InputRightElement={
              formik.errors.password &&
              formik.touched.password && (
                <Icon
                  onPress={() => alert(formik.errors.password)}
                  as={<Ionicons name="information-circle-outline" />}
                  size={6}
                  mr="2"
                  color="#D82E2F"
                />
              )
            }
            placeholder="Password"
          />

          <Button
            onPress={formik.handleSubmit}
            marginTop={6}
            _pressed={{ bg: "info.100" }}
            bg="secondary.300"
            marginLeft="auto"
            marginRight="auto"
            shadow={2}
            width={350}
            borderRadius={8}
            minHeight={55}
            my={12}
          >
            <Text fontSize={20} color="#fff" fontFamily="NunitoSans-Regular">
              Login
            </Text>
          </Button>
        </FormControl>
      </View>
      <View flexDirection="row" marginLeft="auto" marginRight="auto">
        <Text style={{ color: "#000", fontSize: 16 }}>
          Create a new account ?
        </Text>
        <Text
          style={{ color: "#fc036f", marginLeft: 5, fontSize: 17 }}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
      </View>
    </ScrollView>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.object,
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "rgb(255,99,71)",
    paddingTop: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
});
