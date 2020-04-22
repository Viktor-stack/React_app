import React from "react";
import {
  addPostAC, setPostAC,
  updatePostTextAC
} from "../../../../Redux/reducer-post";
import { connect } from "react-redux";
/*import FormPost from "../Form/FormPost";*/
import Form from "./Form";

let mapStateToProps = state => {
  return {
    state: state.postsPage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updatePostTextActionCreator: (title, number, File) => {
      dispatch(updatePostTextAC(title, number, File));
    },
    addPostAC: () => {
      dispatch(addPostAC());
    },
    setPostAC: postData => {
      dispatch(setPostAC(postData));
    }
  };
};
const FormPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
export default FormPostContainer;
