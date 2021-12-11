import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Center, Box, View } from "native-base";

const cardItem = [
  {
    id: 1,
    name: "All Orders",
    route: "AllOrders",
    color: "secondary.200",
  },
  {
    id: 2,
    name: "Today Orders",
    route: "TodayOrders",
    color: "success.100",
  },
  {
    id: 3,
    name: "Delivery Boys",
    route: "DeliveryBoys",
    color: "secondary.100",
  },
];

const WorkerCard = (props) => {
  const { navigation } = props;

  return (
    <FlatList
      data={cardItem}
      keyExtractor={(item, index) => item.id}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
          <View style={styles.listItem}>
            <Center
              w="180px"
              h="120px"
              size={16}
              bg={item.color}
              rounded="md"
              _text={{
                color: "white",
              }}
              shadow={3}
              borderRadius={6}
            >
              <Box
                _text={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                }}
              >
                {item.name}
              </Box>
            </Center>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default WorkerCard;

const styles = StyleSheet.create({
  listItem: {
    maxWidth: Dimensions.get("window").width / 2,
    flex: 0.5,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 18,
    marginBottom: 6,
    marginRight: 8,
    marginLeft: 8,
  },
});
