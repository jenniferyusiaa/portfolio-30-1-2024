import styles from "./navSlider.module.css";
import { AnimatePresence, motion } from "framer-motion";

const NavSlider = () => {
  const navItems = ["Home", "Work", "About", "Contact"];
  const socialsItems = ["Awwwards", "Instagram", "Twitter", "LinkedIn"];

  const navList = {
    animate: (i) => ({
      x: 0,
      transition: { duration: 1, delay: i },
    }),
    exit: (i) => ({
      x: "100%",
      transition: { duration: 1, delay: i },
    }),
  };

  const side = {
    enter: {
      width: 0,
      transition: { duration: 1, delay: 0.7 },
    },
    exit: {
      width: 150,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      initial={{
        x: "100%",
      }}
      animate={{
        x: 0,
        transition: { duration: 1, ease: [0.77, 0, 0.18, 1] },
      }}
      exit={{
        x: "100%",
        transition: { duration: 1, ease: [0.77, 0, 0.18, 1] },
      }}
      className={styles.navSlider}
    >
      <motion.div
        variants={side}
        initial="exit"
        animate="enter"
        exit="exit"
        className={styles.side}
      ></motion.div>
      <div className={styles.navSliders}>
        <div className={styles.navigation}>
          <p>Navigation</p>
        </div>

        <div className={styles.navContainer}>
          <AnimatePresence mode="wait">
            {navItems.map((navItem, index) => {
              return (
                <motion.div key={index} className={styles.navLink}>
                  <div className={styles.indicator}></div>
                  <motion.a
                    variants={navList}
                    custom={index * 0.2}
                    initial="exit"
                    animate="animate"
                    exit="exit"
                    href=""
                  >
                    {navItem}
                  </motion.a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className={styles.socials}>
          <div className={styles.socialsText}>
            <p>Socials</p>
          </div>
          <div className={styles.socialsContainer}>
            {socialsItems.map((socialsItem, index) => {
              return (
                <div key={index} className={styles.socialsLink}>
                  <a href="">{socialsItem}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavSlider;
