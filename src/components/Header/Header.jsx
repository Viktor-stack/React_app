import React from "react";
import s from  "./header.module.scss";
import Logo from "./Logo/Logo";
import Nav from "./MenuNav/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={s.inner}>
          < Logo/>
          <Nav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
