/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import Figure from "../components/Figure";
import { fadeIn, staggerContainer } from "../utils/motion";
import ProgressBar from "../components/ProgressBar";
import { skillsData } from "../constants";
import { TypingText } from "../components";

const Hero = () => (
  <>
    <div className="lg:flex">
      {/* image section  */}
      <section className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" flex flex-col items-center"
        >
          <div className="gradient-04 z-0" />

          <div className="flex justify-center items-center flex-col lg:ml-24 top-3 z-10 text-4xl absolute  ">
            <TypingText
              title="Mahdi Fallah"
              textStyles="text-white text-4xl md:text-[60px] font-mono my-4 "
            />

            <motion.div className="flex flex-row justify-center items-center   text-white mb-2 ">
              <TypingText
                title="Web Developer"
                textStyles="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white mx-2 text-transparent bg-clip-text  font-mono to-white xl:text-7xl lg:text-4xl text-2xl "
              />
            </motion.div>
          </div>
          {/* ----> image <------*/}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="relative mt-[68px] flex w-full lg:ml-44 ml-0 h-[550px]"
          >
            <img
              src="/map.png"
              alt="map"
              className="w-full h-full object-cover"
            />

            <div className="absolute lg:right-[600px] lg:top-32 md:right-20 right-[200px]  md:w-[70px] md:h-[70px] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5D6680]">
              <img src="people-01.png" alt="people" className="w-full h-full" />
            </div>

            <div className="absolute top-1/2 left-[600px] md:w-[70px] md:h-[70px] w-[50px] h-[50px]  p-[6px] rounded-full bg-[#5D6680]">
              <img src="people-03.png" alt="people" className="w-full h-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>

    {/* Performance  part */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className=" w-full md:mt-1 my-2">
        <motion.h1
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          className="text-white flex font-extrabold  text-[24px] leading-[30.24px] tracking-widest border-b-2 mx-[20%] pb-2 justify-center my-4 "
        >
          Performance
        </motion.h1>

        <div className="w-full h-max flex md:flex-row flex-col justify-center itmes-center gap-4 p-4">
          <ProgressBar />
        </div>
        <div className=" w-[10%] h-24 inset-64 gradient-01" />
      </motion.div>
    </motion.div>

    {/* skills text part */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1.5)}
        className=" w-full -mt-20 my-2"
      >
        <h1 className="text-white flex font-extrabold  text-[24px] leading-[30.24px] tracking-widest border-b-2 mx-[20%] pb-2 justify-center my-8 ">
          Skills
        </h1>
        <div className=" w-full h-max flex justify-around  flex-wrap   gap-5 text-cyan-400 px-8 py-4 mb-8">
          {skillsData.map((item, index) => (
            <Figure
              num={item.number}
              text={item.text}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>

    <div className="absolute w-[10%] h-24 inset-64 gradient-01" />
  </>
);

export default Hero;
