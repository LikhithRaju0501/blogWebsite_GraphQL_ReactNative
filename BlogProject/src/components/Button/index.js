/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.container.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
