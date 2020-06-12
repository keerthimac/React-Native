import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} ImageScore={8} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} ImageScore={7} />
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} ImageScore={4} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
