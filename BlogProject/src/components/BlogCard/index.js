/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Card} from 'react-native-shadow-cards';
import Seperator from '../Seperator';

const BlogCard = ({author, date, category, content}) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.container}>
        <Text style={styles.detailName}>
          By: <Text style={styles.detail}>{author}</Text>{' '}
        </Text>
        <Text style={styles.detailName}>
          Published on: <Text style={styles.detail}>{date}</Text>
        </Text>
        {category && (
          <Text style={styles.detailName}>
            Category: <Text style={styles.detail}>{category}</Text>{' '}
          </Text>
        )}
        <Card style={styles.card}>
          <Seperator />
          <Text style={styles.content}>{content}</Text>
          <Seperator />
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(BlogCard);
