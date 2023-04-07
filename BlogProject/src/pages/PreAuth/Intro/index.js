/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {styles} from './styles';
import {
  Alert,
  Button,
  Cards,
  Header,
  Seperator,
  ViewToggleBox,
} from '../../../components';
import {GET_ALL_BLOGS} from '../../../graphQL/queries';
import {useQuery} from '@apollo/client';

const Intro = ({navigation}) => {
  const {data: blogs, loading, error} = useQuery(GET_ALL_BLOGS);

  console.log({loading, error});

  const isSignedIn = true;

  return (
    <ScrollView>
      <View style={styles.container}>
        <ViewToggleBox
          showIfTrue={isSignedIn}
          replaceWith={
            <Button
              title="ADD BLOG"
              onPress={() => navigation.navigate('AddBlogs')}
            />
          }>
          <View style={{width: '100%'}}>
            <Header title="Want to explore more? " />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('Login')}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </ViewToggleBox>

        <Seperator />

        <Lottie
          source={require('../../../assets/Blog.json')}
          autoPlay
          loop
          style={styles.lottieGif}
        />
        <Seperator />
        <ViewToggleBox
          showIfTrue={error}
          replaceWith={
            <Alert
              title="An unexpected error occured. Please try again later"
              isDanger
            />
          }>
          <ViewToggleBox
            showIfTrue={loading}
            replaceWith={<Text>Loading</Text>}>
            {blogs &&
              blogs.blogs.map((item, index) => {
                return (
                  <Cards
                    key={index}
                    {...item}
                    onPress={() =>
                      navigation.navigate('BlogContent', {...item})
                    }
                  />
                );
              })}
          </ViewToggleBox>
        </ViewToggleBox>
      </View>
    </ScrollView>
  );
};

export default React.memo(Intro);
