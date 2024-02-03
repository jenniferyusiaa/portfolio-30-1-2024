import styles from "./slidingImages.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SlidingImages = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div className={styles.firstLine}>
        <motion.div style={{ x: x1 }} className={styles.firstSlider}>
          <div className={styles.firstImages}>
            <img src="./slideImage1.jpg" alt="imageslide" />
            <video autoPlay muted loop>
              <source src="./slideVideo1.mp4" type="video/mp4" />
            </video>
            <img src="./slideImage2.jpg" alt="imageslide" />
            <video autoPlay muted loop>
              <source src="./slideVideo2.mp4" type="video/mp4" />
            </video>
            <img src="./image1.jpg" alt="imageadditional" />
          </div>
        </motion.div>
      </div>
      <div className={styles.secondLine}>
        <motion.div style={{ x: x2 }} className={styles.secondSlider}>
          <div className={styles.secondImages}>
            <video autoPlay muted loop>
              <source src="./slideVideo3.mp4" type="video/mp4" />
            </video>
            <img src="./slideImage3.jpg" alt="imageslide" />
            <video autoPlay muted loop>
              <source src="./slideVideo4.mp4" type="video/mp4" />
            </video>
            <img src="./slideImage4.jpg" alt="imageslide" />
            <div className={styles.videoContainer}>
              <video autoPlay muted loop>
                <source src="./slideVideoAdd.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
