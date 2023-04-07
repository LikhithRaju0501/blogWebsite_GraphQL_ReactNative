/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useMutation} from '@apollo/client';
import {useForm, Controller} from 'react-hook-form';
import {Alert, Button, DropdownComp, Input} from '../../../components';
import {CREATE_BLOG} from '../../../graphQL/mutations';
import {GET_ALL_BLOGS} from '../../../graphQL/queries';
import {styles} from './styles';

const AddBlogs = ({navigation}) => {
  const scrollRef = useRef();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
  };

  const [createBlog, {data: blog, loading, error: blogPostError}] = useMutation(
    CREATE_BLOG,
    {
      onCompleted: () => {
        navigation.navigate('Intro');
      },
      onError: error => {
        console.log('Error');
        console.log({error});
      },
      refetchQueries: [{query: GET_ALL_BLOGS}],
    },
  );

  console.log({blog, loading, blogPostError});

  const [dropdownValue, setdropdownValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const onSubmit = data => {
    createBlog({
      variables: {
        input: {
          ...data,
          date: getCurrentDate(),
          category: dropdownValue ? dropdownValue : null,
        },
      },
    });

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const rules = {
    author: {
      required: 'Your Name is Required',
    },
    title: {
      required: 'Title is Required',
      minLength: {
        value: 2,
        message: 'It should be minimum 2 characters long',
      },
    },
    content: {
      required: 'Blog Content is Required',
      minLength: {
        value: 10,
        message: 'It should be minimum 10 characters long',
      },
    },
  };

  return (
    <ScrollView ref={scrollRef}>
      <View style={styles.container}>
        {loading && <Alert title="Posting your blog..." isSuccess />}
        {blogPostError && (
          <Alert
            title="An unexpected error occurred. Please try again later"
            isDanger
          />
        )}

        <Controller
          control={control}
          rules={rules.author}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              title="Author*"
              placeholder="Enter your name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="author"
        />
        {errors.author && (
          <Text style={styles.validationError}>{errors.author.message}</Text>
        )}

        <Controller
          control={control}
          rules={rules.title}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              title="Title*"
              placeholder="Enter Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />
        {errors.title && (
          <Text style={styles.validationError}>{errors.title.message}</Text>
        )}

        <DropdownComp
          title="Category"
          value={dropdownValue}
          setValue={setdropdownValue}
          isFocus={isFocus}
          setIsFocus={setIsFocus}
        />

        <Controller
          control={control}
          rules={rules.content}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              title="Content*"
              placeholder="Add Content"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isMultiLine
            />
          )}
          name="content"
        />
        {errors.content && (
          <Text style={styles.validationError}>{errors.content.message}</Text>
        )}

        <Button title="Create Blog" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default React.memo(AddBlogs);
