import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  Avatar,
  HStack,
  Divider,
  Icon,
} from "native-base";

const getIcon = (screenName) => {
  switch (screenName) {
    case "Shop":
      return "pricetags-outline";
    case "Profile":
      return "person-outline";
    case "Favorite":
      return "heart-outline";
    case "archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

const DrawerItem = (props) => {
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/1558955.jpg",
      }}
      style={styles.container}
    >
      <DrawerContentScrollView {...props}>
        <VStack space={6} my={2} mx={1}>
          <Box px={6}>
            <Avatar
              size="2xl"
              borderColor="#000"
              bg="tomato"
              source={{
                uri: "https://coolwallpapers.me/picsup/5771328-hailee-steinfeld-wallpapers.jpg",
              }}
            >
              <Avatar.Badge bg={"green.500"} />
            </Avatar>
            <Text style={styles.title}>Hailee Steinfeld</Text>
            <Text style={styles.subtitle}>Steinfeld@gmail.com</Text>
          </Box>
          <VStack space={6}>
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={index}
                px={5}
                py={3}
                rounded="md"
                bg={index === props.state.index ? "#E07C24" : "transparent"}
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space={7} alignItems="center">
                  <Icon
                    color={index === props.state.index ? "#fff" : "#fff"}
                    size={8}
                    as={<Ionicons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight={"500"}
                    textTransform="uppercase"
                    fontSize={17}
                    color={index === props.state.index ? "#fff" : "#fff"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  subtitle: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
});
