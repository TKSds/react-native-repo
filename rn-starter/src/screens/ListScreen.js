import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "21" },
    { name: "Friend #2", age: "24" },
    { name: "Friend #3", age: "19" },
    { name: "Friend #4", age: "28" },
    { name: "Friend #5", age: "30" },
    { name: "Friend #6", age: "16" },
    { name: "Friend #7", age: "34" },
    { name: "Friend #8", age: "24" },
    { name: "Friend #9", age: "27" },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: {name: 'Friend #1'}, index: 0}
        // item === {name: 'Friend #1'}; with destructioring the item ({})
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
