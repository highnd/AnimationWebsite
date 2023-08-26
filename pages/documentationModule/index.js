import React, { useState } from "react";
import Documentation from "../../components/documentation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const index = () => {
  const aboutData = [
    {
      title: "button",
      info: ` <button className="text-white bg-gray-700 p-2 rounded-md hover:bg-gray-600"
        onClick={() => (atMax ? reStart() : setShow((prev) => prev + 1))}
      >
        {atMax ? "Restart" : "Show more"}
</button>`,
    },
    {
      title: "navbar",
      info: `<div className="lg:ml-96 overflow-auto flex">
        <Documentation
          Btn={false}
          containerStyle="h-max"
          moduleName="button"
          mainCode={code}
        />
      </div>`,
    },
    {
      title: "sidebar",
      info: `hi3`,
    },
    {
      title: "api",
      info: `444`,
    },
  ];
  const code = `
    <button className="text-white bg-gray-700 p-2 rounded-md hover:bg-gray-600"
        onClick={() => (atMax ? reStart() : setShow((prev) => prev + 1))}
      >
        {atMax ? "Restart" : "Show more"}
       </button>`;

  const [index, setIndex] = useState(0);

  const checkMidCode = (method) => {
    return method;
  };
  return (
    <>
      <div className="bg-primary/90 w-full h-full overflow-auto  pt-32  ">
        <div className="flex flex-col items-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2 text-center lg:mb-12 my-2"
          >
            Design <span className="text-accent ">Code</span> Documentation
          </motion.h2>
        </div>

        <div className="ml-96 my-6 flex">
          <div className=" flex flex-col gap-4 xl:gap-x-8 mr-16 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg text-sm relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-30`}
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <Documentation
            Btn={false}
            containerStyle="h-max"
            moduleName="button"
            mainCode={aboutData[index].info}
          />
        </div>
      </div>
    </>
  );
};

export default index;
