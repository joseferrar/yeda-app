import React, { useState, useEffect, useLayoutEffect } from "react";
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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { GetUsersAction } from "../../../actions/AdminAction";
import UsersModal from "./UsersModal";

const UsersList = (props) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props;

  const { loading, data } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Users",
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
    });
  }, []);

  return (
    <View flex={1}>
      <FlatList
        scrollEnabled
        refreshing={loading}
        onRefresh={GetUsersAction}
        data={data?.users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UsersDetails", {
                data: item,
              });
            }}
          >
            <Box px={5} py={2} rounded="lg" my={0} bg="#fff">
              <View flexDirection="row" top={2}>
                <Avatar size="lg" mr={3} bg="#fff">
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
                  color="primary.100"
                  as={<Ionicons name="chevron-forward-circle-outline" />}
                  size="lg"
                  left={210}
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
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?._id}
      />
      <Box position="relative" h={100} w="100%">
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
        item={data}
      />
    </View>
  );
};

export default UsersList;
