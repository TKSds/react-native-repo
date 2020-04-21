import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  console.log("test");

  return (
    <View>
      <Button onPress={() => setCounter(counter + 1)} title="Increase" />
      <Button onPress={() => setCounter(counter - 1)} title="Decrease" />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
