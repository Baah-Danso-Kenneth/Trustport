'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);


  useEffect(() => {
    const checkScrollPosition = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY;
      const footerOffset = 300;

      const nearFooter = documentHeight - (scrollPosition + windowHeight) < footerOffset;
      setIsNearFooter(nearFooter);
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="z[100] fixed h-16 w-16 z-50 bg-transparent"
          style={{
            right: '2rem'
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, bottom: isNearFooter ? '5rem' : '2rem' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            bottom: isNearFooter ? '5rem' : '2rem',
            transition: { duration: 0.3 }
          }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <motion.div
            className='flex items-center justify-center flex-col text-black hover:text-white'
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 1.5 
            }}
          >
            <Image src="/images/scroll.svg" alt="scroll" width={50} height={50}/>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
