import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  FormControl,
  Select,
  Input,
  CheckIcon,
  Radio,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";

const UsersDetails = (props) => {
  const [disable, setDisable] = useState(true);
  const { navigation } = props;
  const { data } = props.route.params;
  console.log(data);

  const ChangeDisabled = () => {
    setDisable(!disable);
  };
  const formik = useFormik({
    initialValues: {
      name: data.name,
      email: data.email,
      password: "",
      role: data.role,
      status: data.status ? "true" : "false",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name must be required"),
      email: yup.string().email().required("Email must be required"),
      password: yup.string().min(8).required("Password must be required"),
      // status: yup.boolean().required().oneOf([true]),
    }),
    onSubmit: (data) => {
      console.log(data);
      showToast("Updated Successfully !!!");
      setDisable(!disable);
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <Text
          style={styles.headerText}
          numberOfLines={1}
          lineBreakMode="middle"
          textBreakStrategy="simple"
        >
          {data.name}
        </Text>
      ),
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
      headerRight: () => (
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={ChangeDisabled}>
            <Ionicons name="pencil-sharp" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="trash-sharp" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Name:</Text>
        <Input
          w="90%"
          mx={3}
          my={3}
          isDisabled={disable}
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          color={disable ? "default.50" : "primary.50"}
          placeholder="Username"
          _light={{
            placeholderTextColor: "gray.50",
          }}
          _dark={{
            placeholderTextColor: "gray.50",
          }}
        />
        <Text style={styles.label}>Email:</Text>
        <Input
          w="90%"
          mx={3}
          my={3}
          isDisabled={disable}
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          color={disable ? "default.50" : "primary.50"}
          placeholder="Email"
          _light={{
            placeholderTextColor: "gray.50",
          }}
          _dark={{
            placeholderTextColor: "gray.50",
          }}
        />
        <Text style={styles.label}>New Password:</Text>
        <Input
          w="90%"
          mx={3}
          my={3}
          isDisabled={disable}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          type="password"
          color={disable ? "default.50" : "primary.50"}
          placeholder="Password"
          _light={{
            placeholderTextColor: "gray.50",
          }}
          _dark={{
            placeholderTextColor: "gray.50",
          }}
        />
        <Text style={styles.label}>Role:</Text>
        <FormControl w="90%" mx={3} my={3} isDisabled={disable}>
          <Select
            accessibilityLabel="Select your Role"
            placeholder="Select your Role"
            value={formik.values.role}
            onChangeText={formik.handleChange("role")}
            color={disable ? "default.50" : "primary.50"}
            _light={{
              placeholderTextColor: "gray.50",
            }}
            _dark={{
              placeholderTextColor: "gray.50",
            }}
            _selectedItem={{
              bg: "primary.50",
              endIcon: <CheckIcon size={5} />,
            }}
            mt={1}
          >
            <Select.Item label="User" value="user" bg="default.50" />
            <Select.Item label="Worker" value="worker" bg="default.50" />
            <Select.Item label="Admin" value="admin" bg="default.50" disabled />
          </Select>
        </FormControl>

        <View style={styles.radioGroup}>
          <Text style={styles.radioText}>Active:</Text>
          <Radio.Group
            name="status"
            flexDirection="row"
            left={1}
            value={formik.values.status}
            onChange={formik.handleChange("status")}
          >
            <Radio
              value={"true"}
              ml={1}
              color={disable ? "default.50" : "primary.50"}
              isDisabled={disable}
              bg="#fff"
              aria-label="Close"
              colorScheme="Black"
            >
              Yes
            </Radio>
            <Radio
              value={"false"}
              ml={1}
              isDisabled={disable}
              bg="#fff"
              colorScheme="Black"
              aria-label="Close"
            >
              No
            </Radio>
          </Radio.Group>
        </View>
        <Button
          size="md"
          width={150}
          mt={8}
          marginLeft={6}
          marginRight="auto"
          backgroundColor="#8D3DAF"
          startIcon={<Ionicons name={"save-outline"} color="#fff" size={28} />}
          onPress={formik.handleSubmit}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Button>
      </View>
    </View>
  );
};

export default UsersDetails;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    marginLeft: "auto",
    marginRight: 20,
  },
  label: {
    marginLeft: 16,
    marginTop: 10,
    fontFamily: "NunitoSans-Black",
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: "row",
    top: 6,
    marginLeft: 16,
    marginTop: 10,
  },
  radioText: {
    fontFamily: "NunitoSans-Black",
    fontSize: 16,
    marginLeft: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
