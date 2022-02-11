import React, { useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Box,
  Avatar,
  Flex,
  Divider,
  ScrollView,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { GetUsersAction } from "../../actions/AdminAction";

const DeliveryBoys = (props) => {
  const { navigation } = props;
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#EDC126",
      },
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  return (
    <ScrollView>
      {users
        .filter((user) => user?.role === "delivery")
        .map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={index}
            // onPress={() => {
            //   navigation.navigate("UsersDetails", {
            //     data: item,
            //   });
            // }}
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
                {/* <Icon
                  color="primary.100"
                  as={<Ionicons name="chevron-forward-circle-outline" />}
                  size="lg"
                  marginLeft="auto"
                  fontWeight="bold"
                  top={15}
                /> */}
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
        ))}
    </ScrollView>
  );
};

DeliveryBoys.propTypes = {
  navigation: PropTypes.object,
};

export default DeliveryBoys;
