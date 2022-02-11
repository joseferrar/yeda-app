import React, { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  FlatList,
  Box,
  Avatar,
  Fab,
  Icon,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  GetCategoryAction,
  DeleteCategoryAction,
} from "../../../actions/AdminAction";
import CategoryModal from "../../../components/Modal/CategoryModal";

const AllCategory = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.categories);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerTitle: "Category",
      headerLeft: () => null,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);

  return (
    <View bg="#fff" flex={1}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Box px={3} rounded="lg" my={1}>
            <View flexDirection="row" top={2}>
              <Avatar
                size="lg"
                mr={3}
                source={{ uri: item?.imgUrl }}
                bg="secondary.200"
                _text={{ color: "white" }}
              ></Avatar>
              <Text
                color="primary.50"
                fontWeight="bold"
                fontSize={18}
                marginTop={4}
              >
                {" "}
                {item?.category}
              </Text>

              <Ionicons
                style={{ marginLeft: "auto", marginTop: 10 }}
                size={34}
                color={"red"}
                name="trash"
                onPress={() => dispatch(DeleteCategoryAction(item?._id))}
              />
            </View>

            <Divider my={3} bg="gray.50" />
          </Box>
        )}
        keyExtractor={(item) => item?._id}
      />
      <Box position="relative" w="100%">
        <Fab
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          bg="success.100"
          position="absolute"
          size="sm"
          icon={
            <Icon
              color="default.50"
              as={<Ionicons name="add-sharp" />}
              size="md"
            />
          }
        />
      </Box>
      <CategoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        // item={users}
      />
    </View>
  );
};

AllCategory.propTypes = {
  navigation: PropTypes.object,
};

export default AllCategory;
