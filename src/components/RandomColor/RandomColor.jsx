import React, { useEffect, useRef, useState } from "react";
import CopyToClipboard from "../CopyToClipboard";

function RandomColor() {

  

  let [colorType, setColorType] = useState(["hex", "rgb"]);
  let [color, setColor] = useState(() => {
    let localColor = localStorage.getItem("color")
    return localColor ? JSON.parse(localColor)[0] : "#65cf9c"
  });
  let [fontColor, setFontColor] = useState("#ffffff");
  let prevColor = useRef(() => {
    let localColor = localStorage.getItem("color")
    return localColor ? JSON.parse(localColor)[1] : false
  });
  
  
  useEffect (() => {
    setFontColor(!isColorDark(color) ? "#000000" : "#ffffff");
    localStorage.setItem("color", JSON.stringify([color, prevColor.current()]));
  },[color])

  function isColorDark(Color) {
    let r, g, b;
    if (colorType[0] === "hex") {
      r = parseInt(Color.substr(1, 2), 16) / 255;
      g = parseInt(Color.substr(3, 2), 16) / 255;
      b = parseInt(Color.substr(5, 2), 16) / 255;
    } else {
      let rgbValues = Color.match(/\d+/g);
      r = parseInt(rgbValues[0]) / 255;
      g = parseInt(rgbValues[1]) / 255;
      b = parseInt(rgbValues[2]) / 255;
    }

    let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Return true if color is dark, false if light
    return luminance <= 0.5;
  }

  const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const generateRandomHex = (len) => {
    let result = "#";
    for (let i = 0; i < len; i++) {
      result += hexColor[Math.floor(Math.random() * hexColor.length)];
    }
    return result;
  };
  const generateRandomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const handleChangeMode = () => {
    let [a, b] = colorType;
    setColorType([b, a]);
  };

  const handleChangeColor = () => {
    prevColor.current = () => {return color}
    if (colorType[0] === "hex") {
      setColor(generateRandomHex(6));
    } else {
      setColor(generateRandomRGB());
    }
  };

  return (
    <div
      className="randomColor"
      style={{
        backgroundColor: color,
        color: fontColor,
      }}
    >
      <div
        className="button"
        style={{
          display: "flex",
          gap: "1em",
        }}
      >
        <button
          onClick={handleChangeMode}
          style={{
            backgroundColor: fontColor,
            color: color,
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "2px solid black",
            cursor: "pointer",
          }}
        >
          switch to {colorType[1]}
        </button>
        <button onClick={() => {setColor(prevColor.current())}} disabled={prevColor.current() ? false : true}>previous color</button>
        <button
          onClick={handleChangeColor}
          style={{
            backgroundColor: color,
            color: fontColor,
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "2px solid black",
            cursor: "pointer",
          }}
        >
          Generate Random colour
        </button>
      </div>
      <h3>Colour in {colorType[0]} mode</h3>
      <h1 style={{ color: fontColor }}>{color}</h1>
      <CopyToClipboard color={color} />
    </div>
  );
}

export default RandomColor;
