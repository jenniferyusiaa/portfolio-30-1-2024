import styles from "./app.module.css";
import Preloader from "./preloader/Preloader";
import Landing from "./landing/Landing";
import Description from "./description/Description";
import Projects from "./projects/Projects";
import SlidingImages from "./slidingImages/SlidingImages";
import Contact from "./contact/Contact";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 5000);
    })();
  }, []);

  return (
    <div className={styles.app}>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </div>
  );
};

export default App;
