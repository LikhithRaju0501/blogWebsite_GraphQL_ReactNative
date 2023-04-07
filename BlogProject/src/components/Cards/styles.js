/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {},
  card: {padding: 10, marginVertical: 10},
  title: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 20,
  },
  detailName: {
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detail: {
    color: 'grey',
    fontWeight: '300',
  },
});
