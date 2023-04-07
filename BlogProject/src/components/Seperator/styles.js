/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { colors } from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.grey,
    marginHorizontal: 8,
  },
});
