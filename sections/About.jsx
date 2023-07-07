"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative flex z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Dev Info" textStyles="text-center" />
      <TypingText
        title={"About Developer"}
        textStyles={
          "text-white font-bold lg:text-5xl text-2xl text-center mt-4 lg:mb-12 mb-4 tracking-widest stroke-text"
        }
      />

      <div className="flex lg:flex-row-reverse justify-center items-center flex-col lg:gap-12">
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          src="/tech.png"
          id="glowCircle"
          className={`w-64 h-64 lg:w-84 lg:h-84   transition bg-cover  rotating`}
          // onClick={() => setIsRotate((prev) => !prev)}
          alt="cover"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] lg:w-2/3 font-normal sm:text-[32px] text-[20px] text-left text-secondary-white"
        >
          <span className="font-extrabold text-white">if you </span> looking for
          a developer who can handle Almost any task & have good exprience of
          using diffrent libraries &{" "}
          <span className="font-extrabold text-white">TeamWorks</span> &
          experience to work with{" "}
          <span className="font-extrabold text-white">Next.js 13</span> a
          front-End framework using react and typeScript with good{" "}
          <span className="font-extrabold text-white">SEO & Modularity</span>{" "}
          also we cann add databases and back-End to project using my Sql and
          Prisma
        </motion.p>
      </div>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
