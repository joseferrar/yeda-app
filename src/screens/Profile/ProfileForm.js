import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Modal,
  Button,
  Input,
  Radio,
  View,
  Text,
  FormControl,
  Select,
  CheckIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { Countries } from "../../utils/Countries";
import {
  GetProfileAction,
  CreateProfileAction,
  EditProfileAction,
} from "../../actions/ProfileAction";

const ProfileForm = (props) => {
  const dispatch = useDispatch();
  const { profile, navigation } = props;

  const formik = useFormik({
    initialValues: {
      country: profile?.country,
      fullName: profile?.fullName,
      phone: profile?.phone,
      pinCode: profile?.pinCode,
      address1: profile?.address1,
      address2: profile?.address2,
      city: profile?.city,
    },
    validationSchema: yup.object().shape({
      country: yup.string().required("Country must be Entered"),
      fullName: yup.string().required("Full Name must be Entered"),
      phone: yup.string().required("Phone must be Entered"),
      pinCode: yup.string().required("PinCode must be Entered"),
      address1: yup.string().required("Address Line 1 must be Entered"),
      address2: yup.string().required("Address Line 2 must be Entered"),
      city: yup.string().required("city must be Entered"),
    }),
    onSubmit: async (data) => {
      if (profile === null) {
        await dispatch(CreateProfileAction(data));
        await dispatch(GetProfileAction());
      } else {
        await dispatch(EditProfileAction(profile?._id, data));
        await dispatch(GetProfileAction());
      }
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text color="primary.50" fontWeight="bold" fontSize={22} textAlign="center" my={6}>
        Your Account Information
      </Text>

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={2}>
        Your Country:
      </Text>
      <FormControl mt={4}>
        <Select
          minWidth={200}
          color="#000"
          dropdownIcon={<Ionicons name={"chevron-up"} color="#000" size={35} />}
          dropdownCloseIcon={
            <Ionicons name={"chevron-down"} color="#000" size={35} />
          }
          _selectedItem={{
            bg: "primary.50",
            endIcon: <CheckIcon size={5} />,
          }}
          mt={-1}
          mx={4}
          selectedValue={formik.values.country}
          onValueChange={formik.handleChange("country")}
        >
          {Countries &&
            Countries.map((a, index) => (
              <Select.Item
                label={a.name}
                value={a.name}
                key={index}
                bg="default.50"
              />
            ))}
        </Select>
      </FormControl>
      {formik.errors.country && formik.touched.country ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.country}
        </Text>
      ) : null}

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Your Full Name:
      </Text>
      <Input
        mt={2}
        mx={4}
        _invalid={{ backgroundColor: "#000" }}
        color="#000"
        value={formik.values.fullName}
        onChangeText={formik.handleChange("fullName")}
      />
      {formik.errors.fullName && formik.touched.fullName ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.fullName}
        </Text>
      ) : null}
      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Phone Number:
      </Text>
      <Input
        mt={2}
        mx={4}
        color="#000"
        keyboardType="numeric"
        value={formik.values.phone}
        onChangeText={formik.handleChange("phone")}
      />
      {formik.errors.phone && formik.touched.phone ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.phone}
        </Text>
      ) : null}

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Pin Code:
      </Text>
      <Input
        mt={2}
        mx={4}
        color="#000"
        keyboardType="numeric"
        value={formik.values.pinCode}
        onChangeText={formik.handleChange("pinCode")}
      />
      {formik.errors.pinCode && formik.touched.pinCode ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.pinCode}
        </Text>
      ) : null}

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Address Line 1:
      </Text>
      <Input
        mt={2}
        mx={4}
        color="#000"
        value={formik.values.address1}
        onChangeText={formik.handleChange("address1")}
      />
      {formik.errors.address1 && formik.touched.address1 ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.address1}
        </Text>
      ) : null}

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Address Line 2:
      </Text>
      <Input
        mt={2}
        mx={4}
        color="#000"
        value={formik.values.address2}
        onChangeText={formik.handleChange("address2")}
      />
      {formik.errors.address2 && formik.touched.address2 ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.address2}
        </Text>
      ) : null}

      <Text color="primary.50" fontWeight="bold" fontSize={16} ml={4} mt={4}>
        City:
      </Text>
      <Input
        mt={2}
        mx={4}
        color="#000"
        value={formik.values.city}
        onChangeText={formik.handleChange("city")}
      />
      {formik.errors.city && formik.touched.city ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.city}
        </Text>
      ) : null}

      {profile === null ? (
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
          <Text style={styles.buttonText}>Create</Text>
        </Button>
      ) : (
        <Button
          size="md"
          width={200}
          mt={8}
          marginLeft={6}
          marginRight="auto"
          backgroundColor="#8D3DAF"
          startIcon={<Ionicons name={"save-outline"} color="#fff" size={28} />}
          onPress={formik.handleSubmit}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </Button>
      )}
    </ScrollView>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
