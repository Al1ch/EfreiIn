import React from "react";
import styles from "./ProfileCard.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import alainImage from "@/assets/images/Alain_Profile.jpg";
import efreiLogo from "@/assets/images/efreiImage.png";
import sgBg from "@/assets/images/sg-banner.jpg";
import Link from "next/link";
import AddProfile from "@/assets/vectors/addProfile.svg";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image className={styles.banner} alt="" src={sgBg} />
        <Image
          src={alainImage}
          width={100}
          height={100}
          alt=""
          className={styles.imageProfile}
        />
      </div>
      <div className={styles.description}>
        <span className={styles.name}>Alain Chea </span>
        <span className={styles.job}>Etudiant diplome master</span>
      </div>

      <Link
        href="https://www.linkedin.com/in/alain-chea-b53b1b1a2/"
        className={styles.link}
      >
        <Button backgroundColor="transparent" size="lg">
          <AddProfile className={styles.icon} /> Se Connecter{" "}
        </Button>
      </Link>
    </div>
  );
};

export default ProfileCard;
