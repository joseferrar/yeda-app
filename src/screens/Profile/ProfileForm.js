import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileForm = (props) => {
  const { profile, navigation } = props;
  console.log(profile);
  return (
    <View>
      <Text>ProfileForm</Text>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({});
