import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <Button
        title="Clear Colors"
        onPress={() => {
          setColors([]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});

const randomRgb = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

// console.log(Math.floor(Math.random()));
