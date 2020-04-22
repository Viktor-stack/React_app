import React from "react";
import s from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={s.logo}>
      <a href="/">
        <span>JET</span>RO
      </a>
    </div>
  );
};

export default Logo;
