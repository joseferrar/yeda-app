import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Input,
  Stack,
  Center,
  Heading,
  View,
  Text,
  Select,
  CheckIcon,
  TextArea,
  Button,
  ScrollView,
} from "native-base";

const CreateProduct = (props) => {
  const { navigation } = props;
  const [service, setService] = React.useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerStyle: {
        backgroundColor: "#E03B8B",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  return (
    <ScrollView flex={1}>
      <Stack
        mt={3}
        ml={3}
        space={3}
        w={{
          base: "90%",
          md: "30%",
        }}
      >
        <Center>
          <Heading textAlign="center" mb="2" color="dark.50" fontSize={24}>
            Create a new Product
          </Heading>
        </Center>
        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Product Name
        </Text>
        <Input size="xl" borderWidth={1} borderColor="dark.50" />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Image Url
        </Text>
        <Input size="xl" borderWidth={1} borderColor="dark.50" />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Category
        </Text>
        <Select
          borderWidth={1}
          borderColor="dark.50"
          selectedValue={service}
          accessibilityLabel="Choose Service"
          placeholder="Choose"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Price
        </Text>
        <Input
          size="xl"
          height={55}
          placeholder="$"
          borderWidth={1}
          borderColor="dark.50"
          width={200}
        />

        <Text fontWeight="bold" fontSize={16} color="dark.50">
          Description
        </Text>
        <TextArea h={120} borderWidth={1} borderColor="#000" fontSize={16} />
        <Button
          bg="primary.100"
          h={60}
          mt={3}
          marginBottom={34}
          _text={{ color: "#fff", fontWeight: "bold" }}
        >
          Submit
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({});
