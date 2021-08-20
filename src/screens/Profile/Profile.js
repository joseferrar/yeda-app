import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";
import { GetProfileAction } from "../../actions/ProfileAction";
import { Loading } from "../../components/Spinner/Spinner";
import ProfileForm from "./ProfileForm";

const Profile = (props) => {
  const { navigation } = props;
  const { loading, profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetProfileAction());
  }, []);

  return (
    <View>
      {loading && Loading}

      <ProfileForm profile={profile} navigation={navigation} />
      {/* <Text>{profile?.ProfileBy?.name}</Text> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
