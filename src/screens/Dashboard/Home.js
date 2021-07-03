import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";
import { ProfileAction } from "../../actions/ProfileAction";

const Home = (props) => {
  const { navigation } = props;
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ProfileAction());
  }, []);
  console.log(profile);

  return (
    <View>
      <Text>Home</Text>
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

export default Home;

const styles = StyleSheet.create({});
