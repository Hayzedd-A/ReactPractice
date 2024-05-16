import React, { useEffect, useState } from "react";

function TabPage({ children }) {
  const group = groupTab(children.length, 3);
  let [currentTab, setCurrentTab] = useState(1);
  // let [currentTabContent, setCurrentTabContent] = useState(null);
  let [[start, end], setdelimiter] = useState([group[0], group[1]]);
  // [0,3, 5, 7];
  const changeTab = (tab) => {
    setCurrentTab(tab);
    setdelimiter([group[tab - 1], group[tab]]);
  };

  function groupTab(number, divider) {
    const groups = [];
    const base = Math.floor(number / divider);
    const remainder = number % divider;

    for (let i = 0; i < divider; i++) {
      groups.push(i < remainder ? base + 1 : base);
    }
    let delimeter = [0];
    groups.map((ele) => {
      delimeter.push(delimeter[delimeter.length - 1] + ele);
    });
    return delimeter;
  }

  useEffect(() => {
    console.log(start, end);
  }, [currentTab]);
  return (
    <div className="TabView">
      <div className="navButton">
        <span
          className={currentTab === 1 ? "active" : null}
          onClick={() => changeTab(1)}
        >
          Tab 1
        </span>
        <span
          className={currentTab === 2 ? "active" : null}
          onClick={() => changeTab(2)}
        >
          Tab 2
        </span>
        <span
          className={currentTab === 3 ? "active" : null}
          onClick={() => changeTab(3)}
        >
          Tab 3
        </span>
      </div>
      <div className="mainBody">{children.slice(start, end)}</div>
    </div>
  );
}

export default TabPage;
