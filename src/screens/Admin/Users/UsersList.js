import React, { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  FlatList,
  Box,
  Avatar,
  Flex,
  Fab,
  Icon,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { GetUsersAction } from "../../../actions/AdminAction";
import UsersModal from "./UsersModal";

const UsersList = (props) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props;

  const { loading, users } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Users",
      headerStyle: {
        backgroundColor: "#EDC126",
      },
    });
  }, []);

  return (
    <View bg="#fff" flex={1}>
      <FlatList
        refreshing={loading}
        onRefresh={GetUsersAction}
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("UsersDetails", {
                data: item,
              });
            }}
          >
            <Box px={5} py={2} rounded="lg" my={0}>
              <View flexDirection="row" top={2}>
                <Avatar
                  size="lg"
                  mr={3}
                  bg="secondary.200"
                  _text={{ color: "white" }}
                >
                  {item?.name[0]}
                  <Avatar.Badge
                    borderColor="papayawhip"
                    bg={item.status ? "success.100" : "tomato"}
                  />
                </Avatar>
                <Text color="primary.50" fontWeight="bold">
                  {" "}
                  {item?.name}
                </Text>
                <Icon
                  color="primary.50"
                  as={<Ionicons name="chevron-forward-circle-outline" />}
                  size="lg"
                  marginLeft="auto"
                  fontWeight="bold"
                  top={15}
                />
              </View>
              <Flex right={85} top={-26}>
                <Text color="primary.50" fontWeight="bold" left={40}>
                  {" "}
                  {item?.email}
                </Text>
              </Flex>
              <Divider my={0} bg="gray.50" />
            </Box>
          </TouchableOpacity>
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
      <UsersModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        // item={users}
      />
    </View>
  );
};

UsersList.propTypes = {
  navigation: PropTypes.object,
};

export default UsersList;
