import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProgressBar = () => {
  return (
    <>
      <motion.section
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className="card "
      >
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                90 <span>%</span>
              </h2>
            </div>
            <h2 className="text uppercase">code</h2>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="card"
        variants={fadeIn("left", "spring", 1, 0.75)}
      >
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                60 <span>%</span>
              </h2>
            </div>
            <h2 className="text uppercase">design</h2>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="card"
        variants={fadeIn("left", "spring", 1.5, 0.75)}
      >
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                70 <span>%</span>
              </h2>
            </div>
            <h2 className="text uppercase">teamwork</h2>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ProgressBar;
