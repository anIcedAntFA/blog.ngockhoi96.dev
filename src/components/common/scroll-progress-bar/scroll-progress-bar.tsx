'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './scroll-progress-bar.module.css';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return <motion.div className={styles.root} style={{ scaleX }} />;
}

export default ScrollProgressBar;
