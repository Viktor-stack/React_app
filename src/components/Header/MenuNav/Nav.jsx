import React from "react";
import s from "./nav.module.scss";
import BtnMenu from "./BtnMenu/BtnMenu";
import MenuItems from "./MenuItems/MenuItems";

const Nav = () => {
  return (
    <div>
      <nav className={s.menu}>
        <BtnMenu />
        <ul>
          <MenuItems itemsMenu="Home" linca="/home" />
          <MenuItems itemsMenu="About Us" linca="/about" />
          <MenuItems itemsMenu="Blog" linca="/blog" />
          <MenuItems itemsMenu="Portfolio" linca="/products" />
          <MenuItems itemsMenu="CONTACT US" linca="/contact" />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
