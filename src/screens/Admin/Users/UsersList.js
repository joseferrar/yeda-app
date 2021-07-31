import React, { useEffect, useLayoutEffect } from "react";
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
import { Loading } from "../../../components/Spinner/Spinner";
import { GetUsersAction } from "../../../actions/AdminAction";

const UsersList = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.admin);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Users",
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  return (
    <View flex={1}>
      {loading && Loading()}
      <FlatList
        scrollEnabled
        data={data.users}
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
                <Avatar size="lg" mr={3}>
                  {item.name[0]}
                  <Avatar.Badge
                    borderColor="papayawhip"
                    bg={item.status ? "success.100" : "tomato"}
                  />
                </Avatar>
                <Text color="primary.50" fontWeight="bold">
                  {" "}
                  {item.name}
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
                  {item.email}
                </Text>
              </Flex>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
      <Box position="relative" h={100} w="100%">
        <Fab
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
    </View>
  );
};

export default UsersList;
