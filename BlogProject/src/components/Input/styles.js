/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    color: colors.black,
  },
  input: {
    fontSize: 18,
    height: 70,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    backgroundColor: colors.white,
    color: colors.black,
  },
});
