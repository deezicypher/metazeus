'use client';
import { useState } from 'react';
import {motion} from 'framer-motion';
import styles from '../styles';
import {navVariants, fadeIn, textVariant} from '../utils/motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
  <>
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}

  >
    <div className='absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img 
        src='/search.svg'
        alt='Search'
        className='w-[24px] h-[24px] object-contain'
/>
<h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
METAZEUS
</h2>
<img 
  src="/menu.svg"
  alt="menu"
  className="w-[24px] h-[24px] object-contain cursor-pointer"
  onClick={()=> setToggle(true)}
  />
      </div>
   
  </motion.nav>
 {toggle &&
  <div className='z-20 fixed top-0 bottom-0 left-0 right-0 py-4 px-4  shadow-3xl blue-glassmorphism animate-slide-in'>
 
  <img 
    src="/cancel.svg"
    alt="close"
    className="w-[24px] md:w-[50px] float-right cursor-pointer"
    onClick={() => setToggle(false)}
  />

  <div className={`${styles.innerWidth} mx-auto`}>
  <motion.div 
 variants={fadeIn('right','spring',0.5, 0.75)} 
 className="flex items-center justify-center flex-col gap-5  py-10">
   
        <Link href='/'  className={`text-2xl font-bold ${currentRoute === '/' ? 'text-white' : 'text-white hover:text-gray-200'}`}>
        Home
      </Link>
      
      <Link href='/#about'  className={`text-2xl font-bold ${currentRoute === '/#about' ? 'text-blue-600' : 'text-white hover:text-gray-200'}`}>
        About
      </Link>
      <Link href='/#personalize'  className={`text-2xl font-bold ${currentRoute === '/#personalize' ? 'text-blue-600' : 'text-white hover:text-gray-200'}`}>
        Personalize
      </Link>
      <Link href='/#explore'  className={`text-2xl font-bold ${currentRoute === '/#explore' ? 'text-blue-600' : 'text-white hover:text-gray-200'}`}>
        Explore
      </Link>
 </motion.div>
  </div>
</div>
}
     </>
)
  };

export default Navbar;
