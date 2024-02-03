import styles from "./landing.module.css";
import BgAndSlider from "./bgAndSlider/bgAndSlider";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Nav from "./nav/Nav";
import NavSlider from "./navSlider/NavSlider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const slideUp = {
    initial: {
      y: "100%",
    },
    enter: {
      y: 0,
      transition: { duration: 1.1, ease: [0.87, 0, 0.13, 1], delay: 5 },
    },
  };

  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <BgAndSlider setIsNavOpen={setIsNavOpen} />
        <Nav />
      </motion.div>
      <HamburgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <AnimatePresence mode="await">
        {isNavOpen && <NavSlider isNavOpen={isNavOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Landing;
