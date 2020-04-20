import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;
const MAX_COLOR = 255;
const MIN_COLOR = 0;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue
    // change === +15, -15

    switch (color) {
      case "red":
        red + change > MAX_COLOR || red + change < MIN_COLOR
          ? null
          : setRed(red + change);
        return;
      case "green":
        green + change > MAX_COLOR || green + change < MIN_COLOR
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > MAX_COLOR || blue + change < MIN_COLOR
          ? null
          : setBlue(blue + change);
        return;
      default:
        console.log("color not found");
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
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
