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
import { t } from "i18next";

const getIcon = (screenName) => {
  switch (screenName) {
    case t("drawer.Shop"):
      return "pricetags-outline";
    case t("drawer.Profile"):
      return "person-outline";
    case t("drawer.All Category"):
      return "grid-outline";
    case t("drawer.Cart"):
      return "cart-outline";
    case t("drawer.Orders"):
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
        <VStack divider={<Divider />} space={3} my={2} mx={1}>
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
                    as={<Ionicons name={getIcon(t(`drawer.${name}`))} />}
                  />
                  <Text
                    fontFamily="NunitoSans-Regular"
                    fontWeight={"500"}
                    fontSize={17}
                    color={index === props.state.index ? "#fff" : "#000"}
                  >
                    {t(`drawer.${name}`)}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          {/* footer */}
          <VStack px={5} py={3} marginTop={-2}>
            <Text
              fontFamily="NunitoSans-Regular"
              fontSize={16}
              color="gray.100"
            >
              {t("change_language")}
            </Text>
            <Picker
              selectedValue={lang}
              onValueChange={(language) => {
                i18n.changeLanguage(language), setLang(language);
              }}
            >
              <Picker.Item label={"English"} value={"en"} />
              <Picker.Item label={"Russian"} value={"ru"} />
            </Picker>
        
          </VStack>

          <VStack px={5} py={3} marginTop={-4} >
            <Button
              size="md"
              variant={"ghost"}
              marginRight="auto"
              startIcon={
                <Ionicons name={"exit-outline"} color="gray" size={28} />
              }
              onPress={() => dispatch(logout(props.navigation))}
            >
              <Text
                fontWeight={"500"}
                color="secondary.200"
                fontFamily="NunitoSans-Regular"
                fontSize={18}
              >
               {t("drawer.Logout")}
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
