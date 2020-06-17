import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  //state ==={counter:number}
  //action === {type:increment||decrement,payload:1}

  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload };
    case 'decrement':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  console.log(state.counter);
  const { counter } = state;
  return (
    <View>
      <Button title="increase" onPress={() => dispatch({ type: 'increment', payload: 1 })} />
      <Button title="decrease" onPress={() => dispatch({ type: 'decrement', payload: 1 })} />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
