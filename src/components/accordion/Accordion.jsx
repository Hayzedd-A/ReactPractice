import React, { useState } from "react";
import Data from "../../Datas/accordionData";
import "../../styles/styles.css";

function Accordion() {
  let [selectionType, setSelectionType] = useState(["Multiple", "Single"]);
  let [selected, setSelected] = useState(null);
  let [selectedItems, setSelectedItem] = useState([]);
  let [newHeight, setnewHeight] = useState("");

  const selectionClick = () => {
    let [a, b] = selectionType;
    setSelectionType([b, a]);
  };
  const HandleListClick = (id) => {
    if (selectionType[0] === "Single") {
      selectedItems.includes(id)
        ? setSelectedItem(selectedItems.filter((a) => a !== id))
        : setSelectedItem([...selectedItems, id]);
    } else selected === id ? setSelected(null) : setSelected(id);
    setnewHeight("max-content");
  };
  return (
    <div
      className="accordion"
      style={{
        minHeight: "100vh",
        backgroundColor: "#54242a",
        color: "white",
        padding: "1em",
      }}
    >
      <button
        onClick={selectionClick}
        style={{
          backgroundColor: "#54242a",
          color: "white",
          padding: "0.5em",
          borderRadius: "0.5em",
          border: "2px solid black",
          cursor: "pointer",
        }}
      >
        Set {selectionType[0]} selection
      </button>
      <h1>Accordion</h1>
      <p>This is an Accordion component in {selectionType[1]} selection mode</p>
      <ul>
        {Data.map((ele) => (
          <li
            key={ele.id}
            className={"item_" + ele.id}
            style={{
              height: newHeight,
            }}
          >
            <div
              className="title"
              onClick={() => HandleListClick(ele.id)}
              style={{}}
            >
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
