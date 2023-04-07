/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Alert, BlogCard, Header, ViewToggleBox} from '../../../components';
import {useQuery} from '@apollo/client';

import {styles} from './styles';
import {GET_BLOGS_BY_ID} from '../../../graphQL/queries';

const BlogContent = ({route}) => {
  const {id} = route?.params;
  const {data, loading, error} = useQuery(GET_BLOGS_BY_ID, {
    variables: {blogId: id},
  });

  return (
    <ScrollView>
      <ViewToggleBox showIfTrue={loading} replaceWith={<Text>Loading</Text>}>
        <ViewToggleBox
          showIfTrue={error}
          replaceWith={
            <Alert
              title="An unexpected error occurred. Please try again later"
              isDanger
            />
          }>
          <View style={styles.container}>
            <Header title={data?.blog.title} />
            <BlogCard
              author={data?.blog.author}
              date={data?.blog.date}
              category={data?.blog.category}
              content={data?.blog.content}
            />
          </View>
        </ViewToggleBox>
      </ViewToggleBox>
    </ScrollView>
  );
};

export default BlogContent;
