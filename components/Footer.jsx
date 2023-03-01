'use client';
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import {motion} from "framer-motion";
import {socials} from "../constants";

const Footer = () => (
  <motion.footer 
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter METAZEUS 
            </h4>
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#2561ab] rounded-[32px] gap-[12px]">
              <img 
                src="/headset.svg"
                alt="headeset"
                className="h-[24px] w-[24px] object-contain"
                />
                <span className="font-normal text-[16px] text-white">
                  Enter METAZEUS
                </span>
            </button>
            
      </div>
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex sm:flex-row flex-col justify-between items-center">
        <h4 className="font-extrabold text-[24px] text-white">METAZEUS </h4>
        <p className="font-bold  text-[14px] text-white opacity-50">
        Copyright © 2021 - 2022 MetaZeus. All rights reserved.
        </p>
        <div className="flex gap-4 ">
            {
              socials.map((social) => (
                <img 
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
              ))
            }
        </div>
        </div>
      </div>
      
    </div>
  </motion.footer>
);

export default Footer;
