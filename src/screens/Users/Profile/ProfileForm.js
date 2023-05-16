import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Alert } from "react-native";
import {
  ScrollView,
  Button,
  Input,
  Avatar,
  IconButton,
  Text,
  FormControl,
  Select,
  CheckIcon,
  useColorMode,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Countries } from "../../../utils/Countries";
import {
  GetProfileAction,
  CreateProfileAction,
  EditProfileAction,
} from "../../../actions/ProfileAction";

const ProfileForm = (props) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { profile, navigation } = props;
  const [picture, setpicture] = React.useState(
    "https://efp.org.pk/wp-content/uploads/2019/01/Blank-Trainer.png"
  );

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "siflcc0k");
    data.append("cloud_name", "dwwmdn5p4");

    axios
      .post("https://api.cloudinary.com/v1_1/dwwmdn5p4/image/upload", data)
      .then((res) => {
        console.log(res.data.url);
        setpicture(res.data.url);
      });
  };

  const pickerFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };

  const formik = useFormik({
    initialValues: {
      picture: profile?.picture,
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
        await dispatch(CreateProfileAction(data, (data.picture = picture)));
        await dispatch(GetProfileAction());
      } else {
        await dispatch(
          EditProfileAction(profile?._id, data, (data.picture = picture))
        );
        await dispatch(GetProfileAction());
      }
    },
  });

  return (
    <ScrollView  bg={colorMode === "dark" ? "#0000" : "#242B2E"}>
      <Text
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        fontWeight="bold"
        fontSize={22}
        textAlign="center"
        my={6}
      >
        Your Account Information
      </Text>

      <Avatar
        size="2xl"
        max={3}
        borderColor="#000"
        marginLeft="auto"
        marginRight="auto"
        bg={colorMode === "dark" ? "primary.50" : "#fff"}
        source={{
          uri: profile?.picture,
        }}
      ></Avatar>

      <IconButton
        variant="unstyled"
        height={33}
        marginLeft="auto"
        marginRight="auto"
        top={-70}
        onPress={() => pickerFromGallery()}
        icon={<Ionicons name={"camera-outline"} color="#fff" size={50} />}
      />
      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4}>
        Your Country:
      </Text>
      <FormControl mt={4}>
        <Select
          minWidth={200}
          borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
          color={colorMode === "dark" ? "primary.50" : "#fff"}
          dropdownIcon={<Ionicons name={"chevron-up"} color={colorMode === "dark" ? "#000" : "#fff"} size={35} />}
          dropdownCloseIcon={
            <Ionicons name={"chevron-down"} color={colorMode === "dark" ? "#000" : "#fff"} size={35} />
          }
          _selectedItem={{
            bg: colorMode === "dark" ? "primary.50" : "#fff",
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

      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Your Full Name:
      </Text>
      <Input
        mt={2}
        mx={4}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        _invalid={{ backgroundColor: "#000" }}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        value={formik.values.fullName}
        onChangeText={formik.handleChange("fullName")}
      />
      {formik.errors.fullName && formik.touched.fullName ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.fullName}
        </Text>
      ) : null}
      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Phone Number:
      </Text>
      <Input
        mt={2}
        mx={4}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        keyboardType="numeric"
        value={formik.values.phone}
        onChangeText={formik.handleChange("phone")}
      />
      {formik.errors.phone && formik.touched.phone ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.phone}
        </Text>
      ) : null}

      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Pin Code:
      </Text>
      <Input
        mt={2}
        mx={4}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        keyboardType="numeric"
        value={formik.values.pinCode}
        onChangeText={formik.handleChange("pinCode")}
      />
      {formik.errors.pinCode && formik.touched.pinCode ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.pinCode}
        </Text>
      ) : null}

      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Address Line 1:
      </Text>
      <Input
        mt={2}
        mx={4}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        value={formik.values.address1}
        onChangeText={formik.handleChange("address1")}
      />
      {formik.errors.address1 && formik.touched.address1 ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.address1}
        </Text>
      ) : null}

      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        Address Line 2:
      </Text>
      <Input
        mt={2}
        mx={4}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        value={formik.values.address2}
        onChangeText={formik.handleChange("address2")}
      />
      {formik.errors.address2 && formik.touched.address2 ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.address2}
        </Text>
      ) : null}

      <Text color={colorMode === "dark" ? "primary.50" : "#fff"} fontWeight="bold" fontSize={16} ml={4} mt={4}>
        City:
      </Text>
      <Input
        mt={2}
        mx={4}
        borderColor={colorMode === "dark" ? "primary.50" : "#fff"}
        color={colorMode === "dark" ? "primary.50" : "#fff"}
        value={formik.values.city}
        onChangeText={formik.handleChange("city")}
      />
      {formik.errors.city && formik.touched.city ? (
        <Text color="#E21717" fontSize={14} ml={6} mt={2}>
          {formik.errors.city}
        </Text>
      ) : null}
      {/* <Button
        size="md"
        width={150}
        mt={8}
        marginLeft={6}
        marginRight="auto"
        backgroundColor="#8D3DAF"
        startIcon={<Ionicons name={"save-outline"} color="#fff" size={28} />}
        onPress={() => pickerFromGallery()}
      >
        <Text style={styles.buttonText}>Upload img</Text>
      </Button> */}

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
          marginBottom={8}
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

ProfileForm.propTypes = {
  navigation: PropTypes.object,
  profile: PropTypes.object,
};

export default ProfileForm;

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
