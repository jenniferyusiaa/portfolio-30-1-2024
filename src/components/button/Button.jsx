import styles from "./button.module.css";
import gsap from "gsap";
import Magnetic from "../magnetic/Magnetic";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Button = ({ children, backgroundColor = "#455CE9", ...attributes }) => {
  const circle = useRef();

  useEffect(() => {
    // Call the animation function when the component mounts
  }, []);
  const onEnter = () => {
    gsap.to(circle.current, { top: 0, duration: 0.3 });
  };

  const onLeave = () => {
    gsap
      .timeline()
      .to(circle.current, { top: "-150%", duration: 0.3 })
      .to(circle.current, { top: "150%", duration: 0.00001, delay: 0.1 });
  };

  return (
    <Magnetic>
      <div
        className={styles.button}
        {...attributes}
        onMouseOver={() => {
          onEnter();
        }}
        onMouseLeave={() => {
          onLeave();
        }}
      >
        <div className={styles.children}>{children}</div>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
