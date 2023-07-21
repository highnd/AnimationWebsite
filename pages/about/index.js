import React, { useState } from "react";
import Image from "next/image";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3 />, name: "CSS" },
          { icon: <FaJs />, name: "JS" },
          { icon: <FaReact />, name: "REACT" },
          { icon: <SiNextdotjs />, name: "NEXT" },
          { icon: <SiFramer />, name: "FRAMER_MOTION" },
          { icon: <FaWordpress />, name: "WORDPRESS" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, name: "FIGMA" },
          { icon: <SiAdobexd />, name: "ADOBE XD" },
          { icon: <SiAdobephotoshop />, name: "PHOTOSHOP" },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// animation
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar  */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center ">text</div>

        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          {/* tab*/}
          <div className=" flex  gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-30`}
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* tab Content */}
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  {/* icons */}
                  <div className=" flex gap-x-4">
                    {item?.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="group">
                          <div className="text-2xl ">{icon.icon}</div>
                          <div className=" absolute pr-14   right-84  pt-2 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                              <div className="text-[12px] leading-none font-semibold capitalize">
                                {icon.name}
                              </div>
                              {/* triangle */}
                              <div className="border-solid border-l-white border-l-8 border-y-transparent  border-y-[4px] border-r-0 absolute -top-1 "></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
