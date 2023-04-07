/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '500',
  },
  isSuccess: {backgroundColor: colors.lightGreen, borderColor: colors.green},
  isDanger: {backgroundColor: colors.lightRed, borderColor: colors.red},
});
