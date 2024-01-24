import React from "react";
import styles from "./CompanyBanner.module.scss";
import sgBanner from "@/assets/images/sg-banner.jpg";
import Image, { StaticImageData } from "next/image";
import sgLogo from "@/assets/images/sgLogo.png";
import { describe } from "node:test";


type Props = {
  id: String;
  banner: string | StaticImageData;
  logo: string | StaticImageData;
  name: string;
  description: string;
  details: string;
};

const CompanyBanner = ({
  id,
  banner,
  logo,
  name,
  description,
  details,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <Image src={banner} alt="sgBanner" className={styles.bannerImage} />
          <Image src={logo} alt="sgLogo" className={styles.logo} />
        </div>
      </div>
      <div className={styles.companiesInfo}>
        <div>
          <h1 className={styles.title}>{name}</h1>
          {/* <p className={styles.description}>{`c'est vous l'avenir`}</p> */}
          <p className={styles.description}>{description}</p>
        </div>
        {/* <p className={styles.details}>
          Services bancaires - Paris - 44 017 employés
        </p> */}
        <p className={styles.details}>{details}</p>
      </div>
    </div>
  );
};

export default CompanyBanner;
