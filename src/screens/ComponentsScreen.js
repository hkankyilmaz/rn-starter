import React from "react";
import { Text, StyleSheet } from "react-native";

function ComponentsScreen() {
  return <Text style={styles.textStyle}>ComponentsScreen</Text>;
}

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    margin: 20,
  },
});
