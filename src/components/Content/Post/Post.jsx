import React from "react";
import s from "./Post.module.scss";
import * as axios from "axios";

class Post extends React.Component {
  componentDidMount() {
    if (this.props.state.postData.length === 0) {
      axios.get("/products").then(response => {
        debugger;
        this.props.setPostAC(response.data.Products);
      });
    }

    this.choosePost = url => {
      axios.get(url).then(response => {
        this.props.state.newPost.push(response.data.Products);
        this.props.addPostAC();
      });
    };

    this.postDelete = (url) => {
      axios.delete(url).then(response => {
        debugger;
        const postData = this.props.state.postData.concat();
        let result = postData;
        result = postData.filter(item => item._id !== response.data.id);
        this.props.deletePost(result);
        /*if (this.props.state.postData.length === 0) {
          axios.get("/products").then(response => {
            this.props.setPostAC(response.data.Products);
          });
        }*/
      });
    };
    this.onChangTitle = (name, index) => {
      debugger;
      const post = this.props.state.postData[index];
      post.name = name;
      const posts = [...this.props.state.postData];
      posts[index] = post;
      this.setState({
        posts: posts
      });
    };
  }

  render() {
    return (
      <div className={s.post}>
        <div className={s.inner}>
          {this.props.postElements(
            this.choosePost,
            this.postDelete,
            this.onChangTitle
          )}
        </div>
      </div>
    );
  }
}
export default Post;
