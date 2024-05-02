import React, { useState } from "react";
import Data from "../Datas/Data";
import "./styles.css";

function Accordion() {
  let [selectionType, setSelectionType] = useState(["Multiple", "Single"]);
  let [selected, setSelected] = useState(null);
  let [selectedItems, setSelectedItem] = useState([]);

  const selectionClick = () => {
    let [a, b] = selectionType;
    setSelectionType([b, a]);
  };
  const HandleListClick = (id) => {
    if (selectionType[0] === "Single") {
      selectedItems.includes(id)
        ? setSelectedItem(selectedItems.filter((a) => a != id))
        : setSelectedItem([...selectedItems, id]);
    } else selected === id ? setSelected(null) : setSelected(id);
    // setSelectedItem([...selectedItems]);
    // : selectedItems.push(id);
    console.log(selectedItems, typeof selectedItems);
  };
  return (
    <div>
      <button onClick={selectionClick}>Set {selectionType[0]} selection</button>
      <h1>Accordion</h1>
      <p>This is an Accordion component in {selectionType[1]} selection mode</p>
      <ul>
        {Data.map((ele) => (
          <li key={ele.id} className={"item_" + ele.id}>
            <div className="title" onClick={() => HandleListClick(ele.id)}>
              <h2>{ele.title}</h2>
              <span>+</span>
            </div>
            <div className="content">
              {selectionType[0] === "Single" ? (
                <p>{selectedItems.includes(ele.id) ? ele.content : null}</p>
              ) : (
                <p>{selected === ele.id ? ele.content : null}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;