import React from "react";
import styles from "./AboutTab.module.scss";
import Link from "next/link";

// const AboutTab = () => {
const AboutTab: React.FC<{ data: any }> = ({ data }) => {

  console.log('AboutTab ENTREPRISE DATA:', data)

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}> Présentation</h2>
      <div className={styles.contentContainer}>
        <p className={styles.description}>{`AboutTab.data.column_values[<desc_index>].text`}</p>
        <div className={styles.websiteSection}>
          <h3 className={styles.titleInfo}>Site web</h3>
          <Link href={`#`} className={styles.link}>
            {`data.column_values[<url_index>].text`}
          </Link>
        </div>
        <div className={styles.sectorSection}>
          <h3 className={styles.titleInfo}>Sector</h3>
          <span className={styles.text}>{data.column_values[1].text}</span>
        </div>
        <div className={styles.sizeSection}>
          <h3 className={styles.titleInfo}>{"Taille de l'entreprise"}</h3>
          <span className={styles.text}>{data.column_values[2].text} employés</span>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
