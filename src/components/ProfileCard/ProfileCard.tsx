import React from "react";
import styles from "./ProfileCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button/Button";
import alainImage from "@/assets/images/Alain_Profile.jpg";
import efreiLogo from "@/assets/images/efreiImage.png";
import sgBg from "@/assets/images/sg-banner.jpg";
import Link from "next/link";
import AddProfile from "@/assets/vectors/addProfile.svg";

type Props = {
  // banner: string | StaticImageData;
  name: string;
  job: string;
  link: string;
};

const ProfileCard = ({
  // banner,
  name,
  job,
  link,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image className={styles.banner} alt="" src={sgBg} />
        <Image
          // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Ffr%2Fsearch%2Fdefault-profile-image&psig=AOvVaw0f5OXXjKJpmAedPdv47Vlf&ust=1706707082489000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj9s7qZhYQDFQAAAAAdAAAAABAE"
          src={alainImage}
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
        // href="https://www.linkedin.com/in/alain-chea-b53b1b1a2/"
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
