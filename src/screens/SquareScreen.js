import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorCounter from './ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(blue);
  // console.log(color);

  const setColors = (color, change) => {
    //color === red,green,blue,
    //Change === +15, -15
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter color="Red" moreColor={() => setColors('red', COLOR_INCREMENT)} lessColor={() => setColors('red', -1 * COLOR_INCREMENT)} />
      <ColorCounter color="Green" moreColor={() => setColors('green', COLOR_INCREMENT)} lessColor={() => setColors('green', -1 * COLOR_INCREMENT)} />
      <ColorCounter color="Blue" moreColor={() => setColors('blue', COLOR_INCREMENT)} lessColor={() => setColors('blue', -1 * COLOR_INCREMENT)} />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonStyle: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
