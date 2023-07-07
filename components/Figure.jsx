import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Figure = ({ num, text, icon, index }) => {
  return (
    <motion.div
      key={index}
      variants={fadeIn("down", "spring", index * 0.5, 0.3)}
      className="flex flex-col justify-center items-center w-28 h-28 border-2 border-blue-400 rounded-full p-6"
    >
      <div className="flex items-center">
        <span className="mx-2">{num}</span>
        {icon}
      </div>
      <span className="text-white font-serif">{text}</span>
    </motion.div>
  );
};

export default Figure;
