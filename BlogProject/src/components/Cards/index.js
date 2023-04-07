/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Card} from 'react-native-shadow-cards';
import Seperator from '../Seperator';

const Cards = ({title, author, date, category, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Seperator />
          <Text style={styles.detailName}>
            By: <Text style={styles.detail}>{author}</Text>
          </Text>
          <Text style={styles.detailName}>
            Date: <Text style={styles.detail}>{date}</Text>
          </Text>
          {category && (
            <Text style={styles.detailName}>
              Category:<Text style={styles.detail}>{category}</Text>
            </Text>
          )}
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Cards);
