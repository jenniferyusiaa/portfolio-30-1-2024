import styles from "./modal.module.css";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  scaleAnimationsCursor,
  scaleAnimationsImage,
  scaleAnimationsLabel,
} from "./animation";

const Modal = ({ projectsItems, isSelected }) => {
  const { isHover, index } = isSelected;
  const modal = useRef();
  const cursor = useRef();
  const label = useRef();

  useEffect(() => {
    const xMoveModal = gsap.quickTo(modal.current, "left", {
      duration: 0.7,
      ease: "power3",
    });
    const yMoveModal = gsap.quickTo(modal.current, "top", {
      duration: 0.7,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    const xMoveLabel = gsap.quickTo(label.current, "left", {
      duration: 0.3,
      ease: "power3",
    });
    const yMoveLabel = gsap.quickTo(label.current, "top", {
      duration: 0.3,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveModal(pageX);
      yMoveModal(pageY);
      console.log(yMoveModal);
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      console.log(yMoveCursor);
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveLabel(pageX);
      yMoveLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modal}
        variants={scaleAnimationsImage}
        animate={isHover ? "enter" : "exit"}
        className={styles.modal}
      >
        <div style={{ top: -index * 100 + "%" }} className={styles.slider}>
          {projectsItems.map((projectsItem, index) => {
            const { src, color } = projectsItem;
            return (
              <div
                style={{ backgroundColor: color }}
                key={index}
                className={styles.image}
              >
                <img src={src} alt="imagehover" width={350} />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimationsCursor}
        animate={isHover ? "enter" : "exit"}
        ref={cursor}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        variants={scaleAnimationsLabel}
        animate={isHover ? "enter" : "exit"}
        ref={label}
        className={styles.label}
      >
        View
      </motion.div>
    </>
  );
};

Modal.propTypes = {
  projectsItems: PropTypes.array.isRequired,
  isSelected: PropTypes.array.isRequired,
};

export default Modal;
