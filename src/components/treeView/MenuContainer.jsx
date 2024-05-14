import React from "react";
import Menus from "./Menus";
import sideMenu from "../../Datas/treeData";

function MenuContainer() {
  return (
    <div className="sideMenu">
      <Menus sideMenu={sideMenu} />
      <p>This is recursive menu from a json format object</p>
    </div>
  );
}

export default MenuContainer;
