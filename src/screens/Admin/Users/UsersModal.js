import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostUserAction, GetUsersAction } from "../../../actions/AdminAction";

const UsersModal = (props) => {
  const dispatch = useDispatch();
  const { modalVisible, setModalVisible, item } = props;

  useEffect(() => {
    dispatch(GetUsersAction());
  }, [item]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
      status: "true",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name must be required"),
      email: yup.string().email().required("Email must be required"),
      password: yup.string().min(8).required("Password must be required"),
      // status: yup.boolean().required().oneOf([true]),
    }),
    onSubmit: (data) => {
      dispatch(PostUserAction(data));
      // showToast("Created Successfully !!!");
      setModalVisible(!modalVisible);
    },
  });

  return (
    <View>
      <Modal isOpen={modalVisible} onClose={setModalVisible} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton bg="#000" />

          <Modal.Body>
            <Text color="primary.50" fontWeight="bold" fontSize={18}>
              Create a new User ?
            </Text>
            <Input
              mt={6}
              placeholder="Name"
              color="#000"
              value={formik.values.name}
              onChangeText={formik.handleChange("name")}
            />
            <Input
              mt={6}
              placeholder="Email"
              color="#000"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
            />
            <Input
              mt={6}
              placeholder="Password"
              color="#000"
              value={formik.values.password}
              onChangeText={formik.handleChange("password")}
            />
            <FormControl mt={4}>
              <Select
                minWidth={200}
                accessibilityLabel="Select your Role"
                placeholder="Select your Role"
                color="#000"
                _selectedItem={{
                  bg: "primary.50",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt={1}
                selectedValue={formik.values.role}
                onValueChange={formik.handleChange("role")}
              >
                <Select.Item label="User" value="user" bg="default.50" />
                <Select.Item label="Worker" value="worker" bg="default.50" />
                <Select.Item
                  label="Admin"
                  value="admin"
                  bg="default.50"
                  disabled
                />
              </Select>
            </FormControl>
            <View flexDirection="row" top={4} left={1}>
              <Text color="primary.50" fontWeight="bold" fontSize={16}>
                Active:
              </Text>
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
                  bg="#fff"
                  aria-label="Close"
                  colorScheme="Black"
                >
                  Yes
                </Radio>
                <Radio
                  value={"false"}
                  ml={1}
                  bg="#fff"
                  colorScheme="Black"
                  aria-label="Close"
                >
                  No
                </Radio>
              </Radio.Group>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="outline" space={6} my={3}>
              <Button
                colorScheme="rgb(14, 107, 237)"
                onPress={formik.handleSubmit}
              >
                SUBMIT
              </Button>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                colorScheme="rgb(252, 0, 0)"
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

export default UsersModal;
