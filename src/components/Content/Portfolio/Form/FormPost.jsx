import React from "react";
import s from "../FormPost/formpost.module.scss";
import { setPostAC } from "../../../../Redux/reducer-post";

const FormPost = props => {
  const addPost = () => {
    props.addPostAC();
    setPostAC();
  };
  let newPostTitle = React.createRef();
  let newPostNumber = React.createRef();
  const onPostChange = () => {
    let title = newPostTitle.current.value;
    let number = newPostNumber.current.value;
    props.updatePostTextActionCreator(title, number, File);
  };

  return (
    <div className="container">
      <div className={s.form}>
        <div className={s.line}>
          <input
            onChange={onPostChange}
            ref={newPostTitle}
            type="text"
            value={props.state.newPostDate.title}
          />
        </div>
        <div className={s.line}>
          <input
            onChange={onPostChange}
            ref={newPostNumber}
            type="text"
            value={props.state.newPostDate.dataNumber}
          />
        </div>
        <div className={s.line}>
          <input type="file" name="file" />
        </div>
        <div className={s.line}>
          <button onClick={addPost} type="submit">
            Сохранить Пост
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
