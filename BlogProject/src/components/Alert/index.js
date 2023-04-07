/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Alert = ({title, isSuccess, isDanger}) => {
  return (
    <View
      style={[
        styles.container,
        isSuccess ? styles.isSuccess : isDanger ? styles.isDanger : {},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Alert;
