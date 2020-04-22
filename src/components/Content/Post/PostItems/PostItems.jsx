import React from "react";
import s from "./postItems.module.scss";

const PostItems = props => {
  return (
    <div className={s.items}>
      <a href="http://htmlwork.ru/moderno/profile-details.html">
        <div
          className={s.works}
          style={{
            backgroundImage: `url(${props.original})`
          }}
        />
      </a>
      <a href="http://htmlwork.ru/moderno/profile-details.html">
        <div className={s.itemsBox}>
          <div className={s.title}>{props.title}</div>

          <div className={s.desc}>{props.dataNumber}</div>
        </div>
      </a>
    </div>  
  );
};

export default PostItems;
