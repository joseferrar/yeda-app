import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";
import WorkerCard from "../../components/Cards/WorkerCard";

const Workers = (props) => {
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
            style={{ marginRight: 25 }}
            onPress={() => dispatch(logout(navigation))}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View flex={1} bg="#fff">
      <WorkerCard navigation={navigation} />
    </View>
  );
};

Workers.propTypes = {
  navigation: PropTypes.object,
};

export default Workers;
