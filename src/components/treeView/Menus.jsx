import React from "react";
import MenuList from "./MenuList";

function Menus({ sideMenu = [] }) {
  return (
    <ul>
      {sideMenu.map((ele) => (
        <MenuList key={ele.to} list={ele} />
      ))}
    </ul>
  );
}

export default Menus;
