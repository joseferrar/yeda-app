import React from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Box, Divider, Avatar, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const ProfileCard = ({ profile, navigation }) => {
  return (
    <View>
      <View style={styles.mainCardView}>
        <View style={{ marginTop: 8 }}>
          <Box px={4} style={{ flexDirection: "row", marginTop: 8 }}>
            <Ionicons name={"location"} color="red" size={30} />
            <Text
              fontSize={16}
              style={styles.location}
              onPress={() => navigation.navigate("Profile")}
            >
              edit your information
            </Text>
          </Box>

          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Country:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {profile?.country}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 8 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Full Name:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {profile?.fullName}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Phone:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {profile?.phone}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Pin code:{" "}
            </Text>
            <Text fontSize={16} w={120} style={styles.rate}>
              {profile?.pinCode}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Address line 1:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              isTruncated={true}
              numberOfLines={1}
              w={120}
              lineBreakMode="middle"
              textBreakStrategy="simple"
            >
              {profile?.address1}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              Address line 2:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              w={120}
              isTruncated={true}
              numberOfLines={1}
              //   lineBreakMode="middle"
              //   textBreakStrategy="simple"
            >
              {profile?.address2}
            </Text>
          </Box>
          <Box px={4} style={{ flexDirection: "row", marginTop: 10 }}>
            <Text fontSize={16} color="#000" fontWeight="bold">
              City:{" "}
            </Text>
            <Text
              fontSize={16}
              style={styles.rate}
              w={120}
              isTruncated={true}
              noOfLines={1}
            >
              {profile?.city}
            </Text>
          </Box>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainCardView: {
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,

    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  rate: {
    color: "#000",
    marginLeft: "auto",
    fontFamily: "NunitoSans-Regular",
  },
  location: {
    color: "blue",
    marginLeft: "auto",
    marginTop: 1,
    textDecorationLine: "underline",
  },
});
