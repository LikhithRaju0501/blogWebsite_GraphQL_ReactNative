/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addBlog: {
    alignSelf: 'flex-end',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: 8,
  },
  addBlogText: {
    color: colors.white,
  },
  lottieGif: {
    height: 180,
    marginVertical: 10,
  },
});
