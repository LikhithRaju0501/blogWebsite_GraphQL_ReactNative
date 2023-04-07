import { Blog, User } from "./db.js";

export const resolvers = {
  Query: {
    blogs: () => Blog.findAll(),
    blog: (_, { id }) => Blog.findById(id),
  },
  Mutation: {
    createBlog: (_, { input }) => Blog.create(input),
  },
};
