/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  validationError: {
    color: 'red',
  },
  addBlog: {
    width: '100%',
    height: 50,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    buttonText: {
      color: colors.white,
      fontSize: 20,
    },
  },
});
