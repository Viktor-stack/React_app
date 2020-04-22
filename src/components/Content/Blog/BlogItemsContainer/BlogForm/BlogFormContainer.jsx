import React from "react";
import {
  addBlogAC,
  setBlogCA,
  updateTextBlogAC
} from "../../../../../Redux/reducer-blob";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";

const mapBlogFormToProps = state => {
  return {
    state: state.blogPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBlogActionCreator: () => {
      dispatch(addBlogAC());
    },
    setBlogAC: blogData => {
      dispatch(setBlogCA(blogData));
    },
    updateTextBlogActionCreator: (title, text) => {
      let action = updateTextBlogAC(title, text);
      dispatch(action);
    }
  };
};
const BlogFormContainer = connect(
  mapBlogFormToProps,
  mapDispatchToProps
)(BlogForm);

export default BlogFormContainer;
