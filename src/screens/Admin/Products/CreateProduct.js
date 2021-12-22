import React, { useEffect, useLayoutEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  AddProductAction,
  GetProductAction,
  GetCategoryAction,
} from "../../../actions/AdminAction";
import FormError from "../../../components/ErrorMessage/FormError";

const CreateProduct = (props) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.categories);
  const { navigation } = props;

  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);

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
      price: yup.number().required("Data Name must be required"),
    }),
    onSubmit: async (data, action) => {
      await dispatch(AddProductAction(data));
      await dispatch(GetProductAction());
      action.resetForm({
        foodName: "",
        description: "",
        image: "",
        category: "",
        price: "",
      });
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
        {formik.errors.foodName && formik.touched.foodName ? (
          <FormError>{formik.errors.foodName}</FormError>
        ) : null}
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
        {formik.errors.image && formik.touched.image ? (
          <FormError>{formik.errors.image}</FormError>
        ) : null}
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
          {category &&
            category.map((a, index) => (
              <Select.Item
                label={a.category}
                value={a.category}
                key={index}
                _pressed={{ bg: "gray.50" }}
                _text={{ color: "dark.50" }}
              />
            ))}
        </Select>
        {formik.errors.category && formik.touched.category ? (
          <FormError>{formik.errors.category}</FormError>
        ) : null}
        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Price
        </Text>
        <Input
          size="xl"
          height={55}
          placeholder="₽"
          borderWidth={1}
          borderColor="dark.50"
          width={200}
          color="#000"
          keyboardType="phone-pad"
          value={formik.values.price}
          onChangeText={formik.handleChange("price")}
        />
        {formik.errors.price && formik.touched.price ? (
          <FormError>{formik.errors.price}</FormError>
        ) : null}
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
