/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {},
  card: {padding: 20, marginVertical: 10},
  detailName: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  detail: {
    color: colors.darkGrey,
  },
  content: {
    fontSize: 30,
    color: colors.black,
    marginHorizontal: 8,
  },
});
