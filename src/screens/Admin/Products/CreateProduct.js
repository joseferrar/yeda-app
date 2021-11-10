import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Input,
  Stack,
  Center,
  Heading,
  View,
  Text,
  Select,
  CheckIcon,
  TextArea,
  Button,
  ScrollView,
} from "native-base";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  AddProductAction,
  GetProductAction,
} from "../../../actions/AdminAction";

const CreateProduct = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const formik = useFormik({
    initialValues: {
      foodName: "",
      description: "",
      image: "",
      category: "",
      price: "",
    },
    validationSchema: yup.object().shape({
      foodName: yup.string().required("Date must be required"),
      image: yup.string().required("Data Name must be required"),
      category: yup.string().required("Data Name must be required"),
    }),
    onSubmit: async (data) => {
      await dispatch(AddProductAction(data));
      await dispatch(GetProductAction());
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  return (
    <ScrollView flex={1}>
      <Stack
        mt={3}
        ml={3}
        space={3}
        w={{
          base: "90%",
          md: "30%",
        }}
      >
        <Center>
          <Heading textAlign="center" mb="2" color="dark.50" fontSize={24}>
            Create a new Product
          </Heading>
        </Center>
        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Product Name
        </Text>
        <Input
          size="xl"
          borderWidth={1}
          borderColor="dark.50"
          color="dark.50"
          value={formik.values.foodName}
          onChangeText={formik.handleChange("foodName")}
        />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Image Url
        </Text>
        <Input
          size="xl"
          borderWidth={1}
          borderColor="dark.50"
          color="dark.50"
          value={formik.values.image}
          onChangeText={formik.handleChange("image")}
        />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Category
        </Text>
        <Select
          borderWidth={1}
          borderColor="dark.50"
          accessibilityLabel="Choose Service"
          placeholder="Choose"
          color="#000"
          selectedValue={formik.values.category}
          onValueChange={formik.handleChange("category")}
          _selectedItem={{
            bg: "dark.600",
            color: "#000",
            endIcon: <CheckIcon size="5" color="dark.50" />,
          }}
          mt={1}
        >
          <Select.Item
            label="UX Research"
            value="ux"
            _text={{ color: "dark.50" }}
          />
          <Select.Item
            label="Web Development"
            value="web"
            _text={{ color: "dark.50" }}
          />
          <Select.Item
            label="Cross Platform Development"
            value="cross"
            _text={{ color: "dark.50" }}
          />
          <Select.Item
            label="UI Designing"
            value="ui"
            _text={{ color: "dark.50" }}
          />
          <Select.Item
            label="Backend Development"
            value="backend"
            _text={{ color: "dark.50" }}
          />
        </Select>

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Price
        </Text>
        <Input
          size="xl"
          height={55}
          placeholder="$"
          borderWidth={1}
          borderColor="dark.50"
          width={200}
          color="#000"
          keyboardType="phone-pad"
          value={formik.values.price}
          onChangeText={formik.handleChange("price")}
        />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Description
        </Text>
        <TextArea
          h={120}
          borderWidth={1}
          borderColor="#000"
          fontSize={16}
          color="dark.50"
          value={formik.values.description}
          onChangeText={formik.handleChange("description")}
        />
        <Button
          bg="primary.100"
          h={60}
          mt={3}
          marginBottom={34}
          _text={{ color: "#fff", fontWeight: "bold" }}
          onPress={formik.handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({});
