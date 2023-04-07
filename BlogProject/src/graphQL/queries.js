/* eslint-disable prettier/prettier */
import {gql} from '@apollo/client';

export const GET_ALL_BLOGS = gql`
  query getAllBlogs {
    blogs {
      id
      author
      title
      category
      date
    }
  }
`;

export const GET_BLOGS_BY_ID = gql`
  query getBlog($blogId: ID!) {
    blog(id: $blogId) {
      id
      author
      title
      category
      content
      date
    }
  }
`;
