import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer-motion
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { TypingText } from "../components/CustomTexes";

const Home = () => {
  return (
    <div className="bg-primary/60 w-full h-full">
      {/* Text */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full h-full bg-gradient-to-r from-primary/10  via-black/30 to-black-10"
      >
        <div className="flex flex-col text-center justify-center xl:pt-32 pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1 ">
            Do you looking for Creative
            <br />
            <span className="text-accent stroke-text">
              Design for web Apps?
            </span>
          </h1>

          {/* sub Title */}
          <TypingText
            title="| Developer Info"
            textStyles=" xl:text-left text-center text-red-400"
          />
          {/* discription */}
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 sm:mb-10 mb-4 xl:mb-12 md:text-md leading-12 text-sm font-bold"
          >
            if you are looking for a great developer with creative ideas for
            your website or Apps .. welcome to my website!! you can connect to
            me and see my works from my years of exprience .. im open to any
            creative works and big ideas.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden  relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </motion.section>

      {/* image */}
      <section className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        {/*  particles  */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
