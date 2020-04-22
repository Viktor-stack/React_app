import React from "react";
import s from "../../blog.module.scss";
import BlogButton from "../BlogButton/BlogButton";

const BlogItems = props => {
  return (
    <div className={s.items}>
      <div className={s.title} style={{ paddingRight: `10px` }}>
        <div className={s.icon}>
          <img src={props.blogItemsIcons} alt="" />
        </div>
        {props.blogTitleItems}
      </div>
      <div className={s.text}>{props.textDesc}</div>
      <BlogButton />
    </div>
  );
};

export default BlogItems;
