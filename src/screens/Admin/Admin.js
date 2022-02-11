import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../../actions/AuthAction";
import { useDispatch } from "react-redux";
import AdminCard from "./AdminCard";

const Admin = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#EDC126",
      },
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="log-out-outline"
            size={32}
            style={{ marginRight: 30 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <AdminCard navigation={navigation} />
    </View>
  );
};

Admin.propTypes = {
  navigation: PropTypes.object,
};

export default Admin;
