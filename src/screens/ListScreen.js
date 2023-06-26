import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const ListUsers = [
  { name: "Saffet", age: 25 },
  { name: "Isa", age: 25 },
  { name: "Ibrahim", age: 25 },
  { name: "Malik", age: 25 },
  { name: "Reha", age: 25 },
  { name: "Cabbar", age: 25 },
  { name: "Fikret", age: 25 },
  { name: "Mehmet", age: 25 },
  { name: "Atif", age: 25 },
  { name: "Osman", age: 25 },
];

function ListScreen() {
  return (
    <FlatList
      data={ListUsers}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Text style={styles.listItem} key={index}>
          {item.name}-{item.age}
        </Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
