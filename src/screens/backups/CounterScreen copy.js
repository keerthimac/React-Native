import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
