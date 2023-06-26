import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import ListScreen from "./ListScreen";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("ComponentsScreen")}
        style={styles.button}
        title="Go to Component Page"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("ListScreen")}>
        <Text>Go to List Component</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    margin: 0,
    backgroundColor: "red",
  },
});

export default HomeScreen;
