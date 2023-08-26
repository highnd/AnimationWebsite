import React, { useState } from "react";
import Code from "./Code";

const Documentation = ({ mainCode, moduleName, containerStyle, Btn }) => {
  const code = mainCode;

  const [show, setShow] = useState(0);
  const atMax = show > 0;
  const reStart = () => setShow(0);

  return (
    <div className="max-w-lg   flex flex-col gap-3 items-start">
      {Btn && (
        <button
          className="text-white bg-accent/50 p-2 rounded-md hover:bg-gray-600 ml-4"
          onClick={() => (atMax ? reStart() : setShow((prev) => prev + 1))}
        >
          {atMax ? "hide" : moduleName}
        </button>
      )}
      <div className={`relative group ${containerStyle} overflow-auto`}>
        <Code
          code={code}
          animated={true}
          show={Btn ? show > 0 : true}
          maxHeight={24 * 4}
        />
      </div>
    </div>
  );
};

export default Documentation;
