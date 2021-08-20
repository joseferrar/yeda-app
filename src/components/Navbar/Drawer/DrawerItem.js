import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/AuthAction";
import { GetProfileAction } from "../../../actions/ProfileAction";
import {
  Button,
  Box,
  Pressable,
  VStack,
  Text,
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
    case `Cart`:
      return "cart-outline";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

const DrawerItem = (props) => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProfileAction());
  }, []);
  return (
    <ImageBackground
      source={{
        uri: "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ",
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
              <Avatar.Badge bg={"green.500"} borderColor="default.50" />
            </Avatar>
            <Text style={styles.title}>
              {profile?.ProfileBy?.name}
            </Text>
            <Text style={styles.subtitle}>
              {profile?.ProfileBy?.email}
            </Text>
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
                    color={index === props.state.index ? "#fff" : "#000"}
                    size={8}
                    as={<Ionicons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight={"500"}
                    textTransform="uppercase"
                    fontSize={17}
                    color={index === props.state.index ? "#fff" : "#000"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </DrawerContentScrollView>
      <VStack my={4} mx={12} style={{ marginBottom: 20 }}>
        <Button
          size="md"
          backgroundColor="#8D3DAF"
          startIcon={<Ionicons name={"exit-outline"} color="#fff" size={28} />}
          onPress={() => dispatch(logout(props.navigation))}
        >
          <Text
            fontWeight={"500"}
            color="#fff"
            textTransform="uppercase"
            fontSize={17}
          >
            Logout
          </Text>
        </Button>
      </VStack>
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
    color: "#000",
    marginTop: 10,
  },
  subtitle: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
});
