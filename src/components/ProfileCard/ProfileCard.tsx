import React from "react";
import styles from "./ProfileCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button/Button";
import sgBg from "@/assets/images/sg-banner.jpg";
import Link from "next/link";
import AddProfile from "@/assets/vectors/addProfile.svg";
import profilePic1 from "@/assets/images/profilepic_1.png";
import profilePic2 from "@/assets/images/profilepic_2.png";
import profilePic3 from "@/assets/images/profilepic_3.png";
import profilePic4 from "@/assets/images/profilepic_4.png";
import profilePic5 from "@/assets/images/profilepic_5.png";


const getRandomElement = <T,>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const profilePics = [profilePic1, profilePic2, profilePic3, profilePic4, profilePic5];

type Props = {
  name: string;
  job: string;
  link: string;
};

const ProfileCard = ({
  name,
  job,
  link,
}: Props) => {

  const randomPic = getRandomElement(profilePics);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image className={styles.banner} alt="" src={sgBg} />
        <Image
            src={randomPic}
            width={100}
            height={100}
            alt=""
            className={styles.imageProfile}
        />
      </div>
      <div className={styles.description}>
        <span className={styles.name}>{name}</span>
        <span className={styles.job}>{job}</span>
      </div>
      <Link
        href={link}
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
