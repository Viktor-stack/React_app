import React from "react";
import s from "./blog.module.scss";
import BlogFormContainer from "./BlogItemsContainer/BlogForm/BlogFormContainer";
import BlogContainer from "./BlogItemsContainer/BlogItems/BlogContainer";

const Blog = () => {
  return (
    <div className="container">
      <div className={s.blog}>
        <BlogContainer />
        <BlogFormContainer />
      </div>
    </div>
  );
};

export default Blog;
