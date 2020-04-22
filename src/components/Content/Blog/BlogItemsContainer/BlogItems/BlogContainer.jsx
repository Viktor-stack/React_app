import React from "react";
import BlogItems from "../BlogItems/BlogItems";
import Blogs from "./Blogs";
import { connect } from "react-redux";

const mapBlogElementsTP = state => {
  return {
    blogElements: () => {
      return state.blogPage.blogData.map(blog => (
        <BlogItems
          blogItemsIcons={blog.blogItemsIcons}
          blogTitleItems={blog.blogTitleItems}
          textDesc={blog.textDesc}
          key={blog.id}
        />
      ));
    }
  };
};

const BlogContainer = connect(mapBlogElementsTP)(Blogs);
export default BlogContainer;
