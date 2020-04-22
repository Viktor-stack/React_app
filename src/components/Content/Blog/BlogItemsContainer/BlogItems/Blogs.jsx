import React from "react";
import s from "../../blog.module.scss";

const Blogs = props => {
  return (
    <div className="container">
      <div className={s.blog}>
        <div className={s.inner}>{props.blogElements()}</div>
      </div>
    </div>
  );
};

export default Blogs;
