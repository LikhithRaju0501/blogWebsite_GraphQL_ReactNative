/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Seperator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Seperator);
