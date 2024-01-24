import React from "react";
import styles from "./CompanyBanner.module.scss";
import Image from "next/image";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
import { StaticImageData } from "next/image";

type Props = {
  banner: string | StaticImageData;
  logo: string | StaticImageData;
  name: string;
  description: string;
  details: string;
};

// const CompanyBanner = ({
//   // add properties
//   banner,
//   logo,
//   name,
//   description,
//   details,
// }: Props) => {
const CompanyBanner = () => {

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          {/* <Image src={sgBanner} alt="sgBanner" className={styles.bannerImage} />
          <Image src={sgLogo} alt="sgLogo" className={styles.logo} /> */}
          <Image src={sgBanner} alt="sgBanner" className={styles.bannerImage} />
          <Image src={sgLogo} alt="sgLogo" className={styles.logo} />
        </div>
      </div>
      <div className={styles.companiesInfo}>
        <div>
          <h1 className={styles.title}>Company name here</h1>
          <p className={styles.description}>Company description here</p>
        </div>
        <p className={styles.details}>
          Company details here
        </p>
      </div>
    </div>
  );
};

export default CompanyBanner;
