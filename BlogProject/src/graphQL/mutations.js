/* eslint-disable prettier/prettier */
import {gql} from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation createBlog($input: createBlogInput!) {
    createBlog(input: $input) {
      id
      title
      author
      date
      category
    }
  }
`;
