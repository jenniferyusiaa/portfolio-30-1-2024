import styles from "./description.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aside, slideUp } from "./animation";
import Button from "../components/button/Button";

const Description = () => {
  const phrase =
    " Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge. ";
  const secondPhrase =
    "The combination of my passion for design, code & interaction positions me in a unique place in the web design world.";

  const description = useRef();
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.text}>
        <div className={styles.title}>
          {phrase.split(" ").map((word, index) => {
            return (
              <div key={index} className={styles.wordTitle}>
                <motion.p
                  variants={slideUp}
                  custom={index * 0.01}
                  initial="exit"
                  animate={isInView ? "enter" : "exit"}
                >
                  {word}
                </motion.p>
              </div>
            );
          })}
        </div>
        <div className={styles.aside}>
          <motion.p
            variants={aside}
            initial="exit"
            animate={isInView ? "enter" : "exit"}
          >
            {secondPhrase}
          </motion.p>
          <div
            className={styles.buttonContainer}
            data-scroll
            data-scroll-speed={0.2}
          >
            <Button>
              <button>
                <p>About Me</p>
              </button>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Recent Work</p>
      </div>
    </div>
  );
};

export default Description;
