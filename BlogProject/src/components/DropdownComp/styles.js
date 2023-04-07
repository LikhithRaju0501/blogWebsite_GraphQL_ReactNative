/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    height: 70,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    color: colors.black,
  },
  placeholderStyle: {
    fontSize: 18,
    color: colors.grey,
  },
  itemTextStyle: {color: 'black'},
  selectedTextStyle: {
    fontSize: 18,
    color: colors.black,
  },
});
