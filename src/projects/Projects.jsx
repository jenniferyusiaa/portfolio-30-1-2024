import styles from "./projects.module.css";
import ProjectsList from "./projectsList/ProjectsList";
import Modal from "./modal/Modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const projectsItems = [
    { title: "FABRIC", src: "./image1.jpg", color: "#000000" },
    { title: "Aanstekelij", src: "./image2.jpg", color: "#8C8C8C" },
    { title: "Base Create", src: "./image3.jpg", color: "#EFE8D3" },
    { title: "AVVR", src: "./image4.jpg", color: "#706D63" },
  ];

  const [isSelected, setIsSelected] = useState({
    isHover: false,
    index: 0,
  });
  return (
    <div className={styles.projects}>
      <ProjectsList
        projectsItems={projectsItems}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <AnimatePresence>
        <Modal projectsItems={projectsItems} isSelected={isSelected} />
      </AnimatePresence>
    </div>
  );
};

export default Projects;
