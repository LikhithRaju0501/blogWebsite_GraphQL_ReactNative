/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Button, Header, Input} from '../../../components';
import {styles} from './styles';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const rules = {
    email: {
      required: 'Please Enter you Email ID',
    },
    password: {
      required: 'Please Enter the Password',
    },
  };

  const onSubmit = data => console.log({data});
  return (
    <View style={styles.container}>
      <Header title="Login" />
      <Controller
        control={control}
        rules={rules.email}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            title="Email ID"
            placeholder="example@gmail.com"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={styles.validationError}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        rules={rules.password}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            title="Password"
            placeholder="******"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            isPassword
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.validationError}>{errors.password.message}</Text>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default React.memo(Login);
