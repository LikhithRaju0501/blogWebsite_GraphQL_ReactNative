/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddBlogs, BlogContent} from './src/pages/PostAuth';
import {Login, Signup, Intro} from './src/pages/PreAuth';

const LOCAL_SYSTEM_IP_ADDRESS = '10.0.2.2';
const PORT = '9000';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/`,
  cache: new InMemoryCache(),
});
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="BlogContent"
            component={BlogContent}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddBlogs"
            component={AddBlogs}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
