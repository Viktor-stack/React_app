import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import PostItemsC from "./PostItems/PostItemsC";
import { addPostAC, setPostAC, deletePost } from "../../../Redux/reducer-post";

let mapPostElementsTP = state => {
  return {
    state: state.postsPage,
    postElements: (choosePost, postDelete, onChangTitle) => {
      debugger;
      // if (state.postsPage.newPost.length === 0) {
        return state.postsPage.postData.map((post, index) => (
          <PostItemsC
            key={index}
            Image={post.Image}
            name={post.name}
            price={post.price}
            request={post.request}
            choosePost={choosePost}
            postDelete={postDelete}
            onChangTitle={event => onChangTitle(event.target.value, index)}
          />
        ));
      // } else if (state.postsPage.newPost.length > 0) {
      //   return state.postsPage.newPost.map(post => (
      //     <PostItemsC
      //       key={post._id}
      //       Image={post.Image}
      //       name={post.name}
      //       price={post.price}
      //       request={post.request}
      //       postDelete={postDelete}
      //     />
      //   ));
      // }
    }
  };
};

let mapDispatchToProps = dispatch => {
  return {
    setPostAC: postData => {
      dispatch(setPostAC(postData));
    },
    addPostAC: () => {
      dispatch(addPostAC());
    },
    deletePost: postData => {
      dispatch(deletePost(postData));
    }
  };
};
const PostContainer = connect(mapPostElementsTP, mapDispatchToProps)(Post);
export default PostContainer;
