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
        Create a new account
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
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
            InputLeftElement={
              <Icon
                as={<Ionicons name="person-outline" />}
                size={8}
                ml="2"
                color="primary.100"
              />
            }
            InputRightElement={
              formik.errors.name &&
              formik.touched.name && (
                <Icon
                  onPress={() => alert(formik.errors.name)}
                  as={<Ionicons name="information-circle-outline" />}
                  size={6}
                  mr="2"
                  color="#D82E2F"
                />
              )
            }
            placeholder="Username"
          />

          <Input
            marginTop={8}
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
            marginTop={2}
            _pressed={{ bg: "info.100" }}
            bg="secondary.300"
            marginLeft="auto"
            marginRight="auto"
            shadow={2}
            width={350}
            borderRadius={8}
            minHeight={55}
            my={8}
          >
            <Text fontSize={20} color="#fff" fontFamily="NunitoSans-Regular">
              Register
            </Text>
          </Button>
        </FormControl>
      </View>
      <View flexDirection="row" marginLeft="auto" marginRight="auto">
        <Text style={{ color: "#000", fontSize: 16 }}>
          Already Registered ?
        </Text>
        <Text
          style={{ color: "#fc036f", marginLeft: 5, fontSize: 17 }}
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
    backgroundColor: "rgb(255,99,71)",
    paddingTop: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
});
