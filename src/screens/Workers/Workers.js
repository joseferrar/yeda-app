import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { HStack, Stack, Center, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";

const Workers = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="log-out-outline"
            size={32}
            color="#fff"
            style={{ marginRight: 30 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Stack space={3} alignItems="center" top={12}>
        {/* <Heading>Welcome</Heading> */}
        <HStack space={3} alignItems="center">
          <TouchableOpacity onPress={() => navigation.navigate("AllOrders")}>
            <Center
              w="180px"
              h="120px"
              size={16}
              bg="primary.100"
              rounded="md"
              _text={{
                color: "white",
              }}
              shadow={3}
            >
              <Box
                _text={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                }}
              >
                Orders
              </Box>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("dfds")}>
            <Center
              w="200px"
              h="120px"
              bg="primary.100"
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
              shadow={3}
            >
              <Box
                _text={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                }}
              >
                Delivery Boys
              </Box>
            </Center>
          </TouchableOpacity>
        </HStack>
      </Stack>
    </View>
  );
};

export default Workers;
