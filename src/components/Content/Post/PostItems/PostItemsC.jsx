import React, { Component } from "react";
import s from "./postItems.module.scss";
class PostItemsC extends React.Component {
  postInit = () => {
    this.props.choosePost(this.props.request.url);
  };

  post_Delete = () => {
    this.props.postDelete(this.props.request.url);
  };
  render() {
    return (
      <div className={s.items}>
        <button onClick={this.post_Delete}>Удалить Пост</button>
        <a onClick={this.postInit}>
          <div
            className={s.works}
            style={{
              backgroundImage: `url(${this.props.Image.url})`
            }}
          />
        </a>
        <a href="#">
          <div className={s.itemsBox}>
            <div className={s.title}>{this.props.name}</div>
            <div className={s.desc}>{this.props.price}</div>
            <input type="text" onChange={this.props.onChangTitle}/>
          </div>
        </a>
      </div>
    );
  }
}

export default PostItemsC;
