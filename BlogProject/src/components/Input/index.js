/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../enums/colors';

const Input = ({
  title,
  placeholder,
  onBlur,
  onChangeText,
  value,
  name,
  isMultiLine,
  isPassword,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[
          styles.input,
          isMultiLine ? {height: 300, textAlign: 'center'} : {},
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        name={name}
        multiline={isMultiLine}
        numberOfLines={isMultiLine && 10}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default Input;
