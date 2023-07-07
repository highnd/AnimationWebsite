import React, { useState, useCallback, useMemo } from "react";
import { TabButton } from "../components/Buttons";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = useCallback(
    (index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const activeContent = useMemo(() => {
    return tabs[activeIndex].content;
  }, [tabs, activeIndex]);

  return (
    <>
      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto my-2 w-max grid grid-cols-2 h-12 bg-indigo-900/20 items-center px-2 overflow-hidden shadow-xl shadow-900/20 transition rounded-full items-center"
      >
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            label={tab.label}
            index={index}
            isActive={activeIndex === index}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="flex-1 mb-12">{activeContent}</div>
    </>
  );
};

export default Tabs;
