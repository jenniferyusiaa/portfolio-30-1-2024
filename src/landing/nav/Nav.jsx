import Magnetic from "../../components/magnetic/Magnetic";
import styles from "./nav.module.css";

const Nav = () => {
  const navItems = ["Work", "About", "Contact"];

  return (
    <div className={styles.nav}>
      <Magnetic>
        <a href="" className={styles.credit}>
          <div className={styles.copyright}>
            <p>©</p>
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.name}>
              <p>Code by </p>
              <p>aril</p>
              <p>hisyam A.K.A keyshaard</p>
            </div>
          </div>
        </a>
      </Magnetic>
      <div className={styles.navContainer}>
        {navItems.map((navItem, index) => {
          return (
            <div key={index} className={styles.navLink}>
              <Magnetic>
                <a href="">{navItem}</a>
              </Magnetic>
              <div className={styles.indicator}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
