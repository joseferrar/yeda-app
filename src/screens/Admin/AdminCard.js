import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { HStack, Stack, Center, Box } from "native-base";

const AdminCard = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Stack space={3} alignItems="center" top={12}>
        {/* <Heading>Welcome</Heading> */}
        <HStack space={4} alignItems="center">
          <TouchableOpacity onPress={() => navigation.navigate("UserList")}>
            <Center
              w="180px"
              h="120px"
              size={16}
              bg="dark.100"
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
                Users
              </Box>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AllOrders")}>
            <Center
              w="180px"
              h="120px"
              bg="dark.100"
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
                Orders
              </Box>
            </Center>
          </TouchableOpacity>
        </HStack>

        <HStack space={4} alignItems="center" top={8}>
          <TouchableOpacity onPress={() => navigation.navigate("AllProduct")}>
            <Center
              w="180px"
              h="120px"
              size={16}
              bg="dark.100"
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
                Products
              </Box>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AllCategory")}>
            <Center
              w="180px"
              h="120px"
              size={16}
              bg="dark.100"
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
                Category
              </Box>
            </Center>
          </TouchableOpacity>
        </HStack>
      </Stack>
    </View>
  );
};

AdminCard.propTypes = {
  navigation: PropTypes.object,
};

export default AdminCard;
