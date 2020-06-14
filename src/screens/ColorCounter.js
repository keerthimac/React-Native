import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color, moreColor, lessColor }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => {
          moreColor();
        }}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => {
          lessColor();
        }}
      />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
