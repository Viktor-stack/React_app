import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./menuitems.module.scss";

const MenuItems = props => {
  // debugger;
  return (
    <li>
      <NavLink activeClassName={s.active} to={props.linca}>
        {props.itemsMenu}
      </NavLink>
    </li>
  );
};

export default MenuItems;
