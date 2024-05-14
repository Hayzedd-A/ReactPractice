import React, { useState } from "react";
import MenuContainer from "./Menus";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuList({ list = {} }) {
  let [showChildren, setShowChildren] = useState(null);

  const handleExpand = (label) => {
    if (showChildren === label) {
      setShowChildren(null);
    } else {
      setShowChildren(label);
    }
  };
  return (
    <li className={list.label}>
      {list.subMenu ? (
        <h3 onClick={() => handleExpand(list.label)}>
          {showChildren === list.label ? (
            <FaMinus size={15} />
          ) : (
            <FaPlus size={15} />
          )}
          {list.label}
        </h3>
      ) : (
        <h3>{list.label}</h3>
      )}

      {list.subMenu && showChildren === list.label ? (
        <MenuContainer sideMenu={list.subMenu} />
      ) : null}
    </li>
  );
}

export default MenuList;
