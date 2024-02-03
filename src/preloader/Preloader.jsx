import styles from "./preloader.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heightSvg, opacity, slideUp } from "./animation";

const Preloader = () => {
  const words = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Hallo",
    "Привет",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "नमस्ते",
    "Hujambo",
    "Γεια σας",
    "Merhaba",
    "שלום",
    "สวัสดี",
    "Xin chào",
    "Hej",
  ];
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({
    height: "100dvh",
    width: "100dvw",
  });

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 2500 : 100
    );
  }, [index, words.length]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.preloader}
    >
      <div className={styles.text}>
        <motion.h1 variants={opacity} initial="initial" animate="enter">
          <span></span>
          {words[index]}
        </motion.h1>
      </div>
      <div className={styles.customShapeDividerBottom1706937101}>
        <motion.svg
          variants={heightSvg}
          initial="initial"
          exit="exit"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={styles.shapeFill}
          ></path>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default Preloader;
