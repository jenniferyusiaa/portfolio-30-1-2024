import styles from "./contact.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "../components/magnetic/Magnetic";

const Contact = () => {
  const socialsItems = ["Awwwards", "Instagram", "Twitter", "LinkedIn"];
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1.1], [-300, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-425, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <h1>
            <span>
              <img src="./avatar.jpg" alt="imageavatar" />
              {`Let's work`}
            </span>
            <span>together</span>
          </h1>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <motion.div style={{ translateX: x }} className={styles.inTouchButton}>
          <Magnetic>
            <button>
              <p>Get in touch</p>
            </button>
          </Magnetic>
        </motion.div>
        <div className={styles.contactButton}>
          <Magnetic>
            <button>
              <p>keyshaard@rocketmail.com/official</p>
            </button>
          </Magnetic>
          <Magnetic>
            <button>
              <p>+62 858 1181 9602</p>
            </button>
          </Magnetic>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.version}>
            <p>Version</p>
            <h4>2022 © Edition</h4>
          </div>
          <div className={styles.time}>
            <p>Local Time</p>
            <h4>11:48 PM GMT+1</h4>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p>Socials</p>
          <div className={styles.socials}>
            {socialsItems.map((socialsItem, index) => {
              return (
                <a href="" key={index}>
                  {socialsItem}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
