import React, { useState, useEffect } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { logout, UserAction } from "../../../actions/AuthAction";
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
  Select,
} from "native-base";

const getIcon = (screenName) => {
  switch (screenName) {
    case "Shop":
      return "pricetags-outline";
    case "Profile":
      return "person-outline";
    case "All Category":
      return "grid-outline";
    case `Cart`:
      return "cart-outline";
    case "Orders":
      return "briefcase-outline";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

const DrawerItem = (props) => {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const { auth } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProfileAction());
    dispatch(UserAction());
  }, []);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <VStack divider={<Divider />} space={4} my={2} mx={1}>
          <Box px={6}>
            <Avatar
              size="2xl"
              borderColor="#000"
              bg="#000"
              source={{
                uri: profile?.picture,
              }}
            >
              <Avatar.Badge bg={"green.500"} borderColor="default.50" />
            </Avatar>
            <Text fontWeight="bold" fontSize={16} color="dark.50" marginTop={4}>
              {auth?.name}
            </Text>
            <Text
              fontFamily="NunitoSans-Regular"
              fontSize={16}
              color="gray.100"
              marginTop={2}
            >
              {auth?.email}
            </Text>
          </Box>
          <VStack space={3}>
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
                <HStack space={3} alignItems="center">
                  <Icon
                    color={index === props.state.index ? "#fff" : "gray.100"}
                    size={6}
                    as={<Ionicons name={getIcon(name)} />}
                  />
                  <Text
                    fontFamily="NunitoSans-Regular"
                    fontWeight={"500"}
                    fontSize={17}
                    color={index === props.state.index ? "#fff" : "#000"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          {/* footer */}
          <VStack px={5} py={3} marginTop={-4} style={{ marginBottom: 20 }}>
            <Text
              fontFamily="NunitoSans-Regular"
              fontSize={16}
              color="gray.100"
            >
              {"Change Language"} {t("welcome_text")}
            </Text>
            <Picker
              selectedValue={lang}
              style={{ width: "auto" }}
              onValueChange={(language) => {
                i18n.changeLanguage(language), setLang(language);
              }}
            >
              <Picker.Item label={"English"} value={"en"} />
              <Picker.Item label={"Russian"} value={"ru"} />
            </Picker>
            <Button
              size="md"
              backgroundColor="#8D3DAF"
              startIcon={
                <Ionicons name={"exit-outline"} color="#fff" size={28} />
              }
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
        </VStack>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
