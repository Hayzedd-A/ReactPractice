import React, { useEffect, useState } from "react";

function ScrollIndicator() {
  let [scrollPercentege, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScrollEvent = () => {
    let totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let currentScroll = document.documentElement.scrollTop;
    setScrollPercentage((currentScroll / totalHeight) * 100);
  };
  return (
    <div className="scrollIndicator">
      <hr className="background" />
      <hr className="current" style={{ width: scrollPercentege + "%" }} />
    </div>
  );
}

export default ScrollIndicator;
