import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Darshana';

  return (
    <View>
      <Text style={styles.textStyle}>Greeting started with react native</Text>
      <Text style={styles.subTextStyle}>My Name is {name}</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});
