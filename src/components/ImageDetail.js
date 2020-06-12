import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, ImageScore }) => {
  //   console.log(imageSource);
  return (
    <View>
      <Image source={imageSource} />
      <Text>Show Image of {title}</Text>
      <Text>Image Score - {ImageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default ImageDetail;
