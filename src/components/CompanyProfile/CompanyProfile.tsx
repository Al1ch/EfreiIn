import React from "react";
import styles from "./CompanyProfile.module.scss";
import sgBanner from "@/assets/images/sg-banner.jpg";
import Image from "next/image";
import sgLogo from "@/assets/images/sgLogo.png";

const CompanyProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <Image src={sgBanner} alt="sgBanner" className={styles.bannerImage} />
          <Image src={sgLogo} alt="sgLogo" className={styles.logo} />
        </div>
      </div>
      <div className={styles.companiesInfo}>
        <div>
          <h1 className={styles.title}> Société Générale</h1>
          <p className={styles.description}>{`c'est vous l'avenir`}</p>
        </div>
        <p className={styles.details}>
          Services bancaires - Paris - 44 017 employés
        </p>
      </div>
    </div>
  );
};

export default CompanyProfile;
