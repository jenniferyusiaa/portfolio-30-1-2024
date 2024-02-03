import styles from "./projectsList.module.css";
import PropTypes from "prop-types";
import Magnetic from "../../components/magnetic/Magnetic";

const ProjectsList = ({ projectsItems, setIsSelected }) => {
  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.projectsList}>
          {projectsItems.map((projectsItem, index) => {
            const { title } = projectsItem;
            return (
              <div
                key={index}
                className={styles.projectsContainer}
                onMouseOver={() => {
                  setIsSelected({ isHover: true, index: index });
                }}
                onMouseLeave={() => {
                  setIsSelected({ isHover: false, index: index });
                }}
              >
                <div className={styles.content}>
                  <p>{title}</p>
                </div>
                <div className={styles.desc}>
                  <p>Design & Development</p>
                </div>
              </div>
            );
          })}
          <div className={styles.moreWork}>
            <Magnetic>
              <button>
                <p>More Work</p>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        {projectsItems.map((projectsItem, index) => {
          const { title, src, color } = projectsItem;
          return (
            <div key={index} className={styles.projectsMobile}>
              <div className={styles.mainMobile}>
                <div
                  style={{ backgroundColor: color }}
                  className={styles.imageMobile}
                >
                  <img src={src} alt="imagemobile" />
                </div>
                <div className={styles.titleMobile}>
                  <p>{title}</p>
                </div>
              </div>
              <div className={styles.descMobile}>
                <div className={styles.contentMobile}>
                  <p>Design & Development</p>
                </div>
                <div className={styles.yearMobile}>
                  <p>2023</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

ProjectsList.propTypes = {
  projectsItems: PropTypes.array.isRequired,
  setIsSelected: PropTypes.array.isRequired,
};

export default ProjectsList;
