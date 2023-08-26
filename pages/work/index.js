import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { TypingText } from "../../components/CustomTexes";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center py-28">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="h2 mt-10"
            >
              My Works
              <span className="text-accent text-sm mx-2">:)</span>
            </motion.h2>
            <p className="mb-5 mx-w-[400px] mx-auto lg:mx-0">
              this is my Works to the client i provide .. you can swipe and see
              it in the slider
            </p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
