import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;
const MAX_COLOR = 255;
const MIN_COLOR = 0;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number};
  // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  // return {...state, red: state.red + action,amount}
  // syntax copies existing state and adds the new ammount for red; initial state is never changed

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > MAX_COLOR ||
        state.red + action.amount < MIN_COLOR
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > MAX_COLOR ||
        state.green + action.amount < MIN_COLOR
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > MAX_COLOR ||
        state.blue + action.amount < MIN_COLOR
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
