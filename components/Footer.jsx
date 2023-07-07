import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Contact the Developer
        </h4>
        <div className=" flex jsutify-center items-center md:flex-row flex-col gap-8 mt-6 ">
          <input
            type="text"
            name="contact"
            placeholder="contact me"
            className=" h-12 md:w-64 w-full border-sky-100 border-[1px] bg-transparent rounded-xl outline-none focus:bg-slate-50/10 text-white  p-2 text-xl "
            style={{ direction: "rtl" }}
          />
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] hover:bg-indigo-900 rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Contact Me
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            MAHDI FALLAH
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Highnd. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
