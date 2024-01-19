import React from "react";
import styles from "./AboutTab.module.scss";
import Link from "next/link";


const AboutTab = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}> Présentation</h2>
      <div className={styles.contentContainer}>
        <p className={styles.description}>
        </p>
        <div className={styles.websiteSection}>
          <h3 className={styles.titleInfo}>Site web</h3>
          <Link href="https://www.societegenerale.com" className={styles.link}>
            {" "}
            https://www.societegenerale.com
          </Link>
        </div>
        <div className={styles.sectorSection}>
          <h3 className={styles.titleInfo}>Sector</h3>
          <span className={styles.text}>Services bancaires</span>
        </div>
        <div className={styles.sizeSection}>
          <h3 className={styles.titleInfo}>{"Taille de l'entreprise"}</h3>
          <span className={styles.text}>10 001 employés et plus</span>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
