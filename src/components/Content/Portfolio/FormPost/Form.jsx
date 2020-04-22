import React from "react";
import s from "./formpost.module.scss";
import * as axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.newPostTitle = React.createRef();
    this.newPostNumber = React.createRef();
    this.newPostFile = React.createRef();
  }
  addPost = event => {
    event.preventDefault();
    let data = new FormData();
    let name = this.newPostTitle.current.value;
    let price = this.newPostNumber.current.value;
    let imageData = this.newPostFile.current.files[0];
    data.append("productImage", imageData);
    data.append("name", name);
    data.append("price", price);
    axios
      .post("/products", data, {
        name: this.newPostTitle.current.value,
        price: this.newPostNumber.current.value,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        this.props.state.postData.push(response.data.Products);
        this.props.addPostAC();
      });
  };

  onPostChange = () => {
    let name = this.newPostTitle.current.value;
    let price = this.newPostNumber.current.value;
    this.props.updatePostTextActionCreator(name, price, File);
  };
  render() {
    return (
      <form onSubmit={this.addPost}>
        <div className="container">
          <div className={s.form}>
            <div className={s.line}>
              <input
                onChange={this.onPostChange}
                ref={this.newPostTitle}
                type="text"
                key="name"
                value={this.props.state.newPostDate.name}
              />
            </div>
            <div className={s.line}>
              <input
                onChange={this.onPostChange}
                ref={this.newPostNumber}
                type="text"
                key="price"
                value={this.props.state.newPostDate.price}
              />
            </div>
            <div className={s.line}>
              <input type="file" ref={this.newPostFile} />
            </div>
            <div className={s.line}>
              <button>Сохранить Пост</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
