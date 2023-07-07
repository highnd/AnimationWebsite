import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import Tabs from "./Tabs";

const Documentaion = () => {
  return (
    <div
      className={`w-full h-[700px]  border-2 border-white sm:p-12 xs:p-8 px-6 py-6`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex flex-col text-white `}
      >
        <TypingText
          title="Documentaion"
          textStyles="text-white text-xl md:text-[20px] mb-2 font-serif  text-center "
        />

        <Tabs
          tabs={[
            { label: "HTML", content: <div>HTML Content</div> },
            { label: "CSS", content: <div>CSS Content</div> },
          ]}
        />
      </motion.div>
    </div>
  );
};

export default Documentaion;
