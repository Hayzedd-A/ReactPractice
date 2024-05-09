import React, { useState } from "react";
import {
  FaStar,
  FaMeh,
  FaSmile,
  FaFrown,
  FaGrin,
  FaAngry,
} from "react-icons/fa";

function StarRating({ length }) {
  let [active, setActive] = useState("0");
  const handleStarClick = (clicked) => {
    console.log(clicked, " Star Clicked");
    setActive(clicked);
  };
  let emoji = [
    <FaGrin size={40} />,
    <FaSmile size={40} />,
    <FaMeh size={40} />,
    <FaFrown size={40} />,
    <FaAngry size={40} />,
  ];

  return (
    <div className="starRating">
      <h1 className="heading">STAR RATING</h1>
      <div className="stars">
        {[...Array(5)].map((_, ind) => {
          ind++;
          return (
            <FaStar
              className={ind <= active ? "active" : "null"}
              key={ind}
              onClick={() => handleStarClick(ind)}
              size={40}
            />
          );
        })}
      </div>
      <div className="emoji">
        {emoji.filter((ele, ind) => {
          return ind === active - 1 ? (
            <span
              key={ind}
              className={ind <= active ? "active" : "null"}
              onClick={() => handleStarClick(ind)}
            >
              {ele}
            </span>
          ) : null;
        })}
      </div>
    </div>
  );
}
export default StarRating;
