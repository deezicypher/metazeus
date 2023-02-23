'use client';
import { useState } from "react";
import {motion} from 'framer-motion';
import { TypingText, ExploreCard, TitleText, NewFeatures } from "../components";
import styles from "../styles";
import { fadeIn,staggerContainer, planetVariants } from "../utils/motion";
import {exploreWorlds, newFeatures} from "../constants"


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
    
   
      <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1 )}
            className="flex-[0.75]  flex justify-center flex-col"
            >
              <TypingText title="| What's New?" />
              <TitleText title={<>What's new about METAZEUS</>} />
              <div className="mt-[48px] flex flex-wrap sm:flex-row flex-col justify-between gap-[24px]">
                {newFeatures.map((feature, index)=>(
                  <NewFeatures
                    key={feature.title}
                    {...feature}
                    />
                ))}
              </div>
            </motion.div>
            <motion.div 
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
          >
            <img 
            src="/pmoon.jpeg"
            alt="what's new"
            className='w-[100%] h-[100%] rounded-[50%]  object-contain'
            />

          </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
