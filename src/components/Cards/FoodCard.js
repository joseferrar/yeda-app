import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, View } from "native-base";

const FoodCard = ({ item, navigation, colorMode }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => {
      navigation.navigate("Details", {
        data: item,
      });
    }}
  >
    <View
      style={{
        height: 200,
        width: 180,
        backgroundColor: colorMode === "dark" ? "#fff" : "#0D0D0D",
        margin: 8,
        marginTop: 20,
        shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.5,
        elevation: 3,
      }}
    >
      <Avatar
        source={{
          uri: item?.image,
        }}
        alt="image base"
        top={3}
        left={6}
        bg="transparent"
        width={130}
        height={130}
      ></Avatar>

      <Stack space={1} p={[4, 4, 4]} top={0}>
        <Text
          textAlign="center"
          fontFamily="NunitoSans-Black"
          color={colorMode === "dark" ? "primary.50" : "#fff"}
          fontSize={16}
          w={140}
          noOfLines={1}
          isTruncated={true}
        >
          {item?.foodName}
        </Text>

        <Text
          noOfLines={1}
          textAlign="center"
          marginLeft={8}
          bold
          fontSize={14}
          w={75}
          color="success.100"
        >
          ₽ {item?.price}
        </Text>
      </Stack>
    </View>
  </TouchableOpacity>
);

FoodCard.propTypes = {
  navigation: PropTypes.object,
  item: PropTypes.object,
  colorMode: PropTypes.string,
};

export { FoodCard };
