import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, View } from "native-base";

const FoodCard = ({ item, navigation }) => (
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
        backgroundColor: "#fff",
        margin: 8,
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
        borderColor="#fff"
        width={130}
        height={130}
      ></Avatar>

      <Stack space={1} p={[4, 4, 4]} top={0}>
        <Text
          textAlign="center"
          fontFamily="NunitoSans-Black"
          color="primary.50"
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
          left={5}
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
};

export { FoodCard };
