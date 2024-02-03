import styles from "./hamburgerMenu.module.css";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HamburgerMenu = ({ isNavOpen, setIsNavOpen }) => {
  const button = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "5%",
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.4,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.4,
            ease: "power1.out",
          });
        },
      },
    });
  });

  return (
    <div
      ref={button}
      className={styles.hamburgerMenu}
      onMouseDown={() => {
        setIsNavOpen(!isNavOpen);
      }}
    >
      <div
        className={`${styles.hamburger} ${
          isNavOpen && styles.isHamburgerActive
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

HamburgerMenu.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.bool.isRequired,
};

export default HamburgerMenu;
