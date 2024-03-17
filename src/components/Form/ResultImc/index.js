import React from 'react';
import { Text, View } from 'react-native';

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.MensageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
}