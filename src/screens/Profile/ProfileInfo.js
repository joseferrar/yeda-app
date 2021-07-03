import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";
import { ProfileAction } from "../../actions/ProfileAction";

const Profile = (props) => {
  const {navigation} = props
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ProfileAction());
  }, []);
  console.log(profile);
  return (
    <View style={{marginTop: 22, flex:1}}>
      <Text
        onPress={() => dispatch(logout(navigation))}
        style={{ fontSize: 22 }}
      >
        logout
      </Text>

      <Text>{profile?.myprofile?.ProfileBy?.name}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
