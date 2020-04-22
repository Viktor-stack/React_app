import React from "react";
import s from "./portfolio.module.scss";
import FormPostContainer from "./FormPost/FormPostContainer";
import PostContainer from "../Post/PostContainer";

const Portfolio = () => {
  return (
    <div className="container">
      <div className={s.portfolio}>
        <PostContainer />
        <FormPostContainer />
      </div>
    </div>
  );
};

export default Portfolio;
