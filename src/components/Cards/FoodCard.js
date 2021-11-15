import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Text, Stack, View } from "native-base";

const Starches = ({ item, navigation }) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("Details", {
          data: item,
        });
      }}
    >
      {item?.category === "starches" && (
        <View
          style={{
            height: 200,
            width: 160,
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
            left={3.5}
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
              w={120}
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
              w={75}
              color="success.100"
            >
              ₽ {item?.price}
            </Text>
          </Stack>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const Meat = ({ item, navigation }) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("Details", {
          data: item,
        });
      }}
    >
      {item?.category === "meat" && (
        <View
          style={{
            height: 200,
            width: 160,
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
            left={3.5}
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
              w={120}
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
              w={75}
              color="success.100"
            >
              ₽ {item?.price}
            </Text>
          </Stack>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const Fats = ({ item, navigation }) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("Details", {
          data: item,
        });
      }}
    >
      {item?.category === "fats" && (
        <View
          style={{
            height: 200,
            width: 160,
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
            left={3.5}
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
              w={120}
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
              w={75}
              color="success.100"
            >
              ₽ {item?.price}
            </Text>
          </Stack>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const Vegetables = ({ item, navigation }) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("Details", {
          data: item,
        });
      }}
    >
      {item?.category === "vegetables" && (
        <View
          style={{
            height: 200,
            width: 160,
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
            left={3.5}
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
              w={120}
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
              w={75}
              color="success.100"
            >
              ₽ {item?.price}
            </Text>
          </Stack>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

export { Starches, Meat, Fats, Vegetables };
