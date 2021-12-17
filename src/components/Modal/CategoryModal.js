import React, { useEffect } from "react";
import { Modal, Button, Input, View, Text } from "native-base";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { AddCategoryAction } from "../../actions/AdminAction";

const CategoryModal = (props) => {
  const dispatch = useDispatch();
  const { modalVisible, setModalVisible } = props;

  const formik = useFormik({
    initialValues: {
      category: "",
      imgUrl: "",
    },
    validationSchema: yup.object().shape({
      category: yup.string().required("category must be required"),
      imgUrl: yup.string().required("imgUrl must be required"),
    }),
    onSubmit: async (data, action) => {
      await dispatch(AddCategoryAction(data));
      setModalVisible(!modalVisible);
      action.resetForm({
        category: "",
        imgUrl: "",
      });
    },
  });

  return (
    <View>
      <Modal isOpen={modalVisible} onClose={setModalVisible} avoidKeyboard>
        <Modal.Content>
          <Modal.Body>
            <Text
              color="primary.50"
              textAlign="center"
              fontWeight="bold"
              fontSize={20}
            >
              New Category
            </Text>
            <Input
              mt={6}
              placeholder="Category"
              color="#000"
              value={formik.values.category}
              isInvalid={formik.errors.category}
              _invalid={{ borderWidth: 2, borderColor: "danger.100" }}
              onChangeText={formik.handleChange("category")}
            />
            <Input
              mt={6}
              placeholder="Image Url"
              color="#000"
              value={formik.values.imgUrl}
              isInvalid={formik.errors.imgUrl}
              _invalid={{ borderWidth: 2, borderColor: "danger.100" }}
              onChangeText={formik.handleChange("imgUrl")}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={4} my={3}>
              <Button
                colorScheme="rgb(14, 107, 237)"
                onPress={formik.handleSubmit}
              >
                SUBMIT
              </Button>
              <Button
              marginRight={1}
                onPress={() => setModalVisible(!modalVisible)}
                colorScheme="rgb(252, 0, 0)"
                _text={{ color: "#fff" }}
              >
                CANCEL
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default CategoryModal;
