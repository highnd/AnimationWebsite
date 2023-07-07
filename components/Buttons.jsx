import React, { useCallback } from "react";

export const TabButton = ({ label, index, isActive, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  return (
    <button
      role="tab"
      tabIndex={index}
      className={`relative block rounded-full px-6 h-10 tab font-bold ${
        isActive ? "bg-white text-black" : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
