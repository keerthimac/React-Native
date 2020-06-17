import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorCounter from './ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red:number,green:number,blue:number}
  //action === {type:'change_red'||'change_green'||'change_blue', payload: 15 || -15}
  console.log(state.red);
  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case 'change_green':
      if (state.green + action.payload > 255 || state.green + action.payload < 0) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case 'change_blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  //   // console.log(blue);
  // // console.log(color);

  // const setColors = (color, change) => {
  //   //color === red,green,blue,
  //   //Change === +15, -15
  //   switch (color) {
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case 'green':
  //       green + change > 255 || green + change < 0 ? null : setGreen(green + change);
  //       return;
  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        color="Red"
        moreColor={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        lessColor={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        moreColor={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        lessColor={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        moreColor={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        lessColor={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
      />

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
