import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return state.count + action.payload < 0
        ? state
        : { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        onPress={() => dispatch({ type: "increase", payload: 1 })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: "decrease", payload: -1 })}
        title="Decrease"
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
