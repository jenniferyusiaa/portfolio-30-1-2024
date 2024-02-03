import styles from "./bgAndSlider.module.css";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BgAndSlider = ({ setIsNavOpen }) => {
  const slider = useRef();
  const firstText = useRef();
  const secondText = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xPercent = 0;
    let direction = -1;

    const animation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.2 * direction;
      requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: slider.current,
        start: 0,
        end: "100%",
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: -300,
    });
  }, []);

  return (
    <div
      onMouseDown={() => {
        setIsNavOpen(false);
      }}
      className={styles.bgAndSlider}
    >
      <div className={styles.background}>
        <img src="./background.jpg" alt="background" />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.sliderText}>
          <p ref={firstText}>Developer - Programmer - Coder -</p>
          <p ref={secondText}>Developer - Programmer - Coder -</p>
        </div>
      </div>
    </div>
  );
};

BgAndSlider.propTypes = {
  setIsNavOpen: PropTypes.bool.isRequired,
};

export default BgAndSlider;
