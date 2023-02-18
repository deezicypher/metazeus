'use client';

import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn,staggerContainer } from '../utils/motion';



const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About MetaZeus" textStyles="text-center" />
  
      <motion.p
      variants={fadeIn('up','tween',0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white  "
      >
<span className='font-extrabold text-white'>METAZEUS</span>, a realm of wonder, become a god and create your own reality,
Where dreams come to life like thunder,
A metaverse of power and might,
A world to explore day and night,With VR devices in our grasp,
We enter a world beyond our clasp,
A place where fantasy meets reality,
<span className='font-extrabold text-white'>METAZEUS</span>, a world of infinite possibility.
In this realm, we can truly feel,
A world where nothing is unreal,
With <span className='font-extrabold text-white'>METAZEUS</span>, we can explore,
A world beyond our wildest lore.So let us delve into <span className='font-extrabold text-white'>the madness,
The wonders of METAZEUS</span>, a true gladness,
Let us explore the realm of the divine,
<span className='font-extrabold text-white'>METAZEUS</span>, a world that is truly sublime. With every step we take, we shall find,
A new adventure, a new world to unwind,
So come, let us explore and behold,
<span className='font-extrabold text-white'>METAZEUS</span>, a world that never grows old.
</motion.p>

<motion.img 
  variants={fadeIn('up', 'tween', 0.3, 1)}
  src="/arrow-down.svg"
  alt="arrow-down"
  className='w-[18px] h-[28px] object-contain mt-[28px]'
  />
      </motion.div>
  </section>
);

export default About;
