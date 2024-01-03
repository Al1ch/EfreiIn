import React from "react";
import styles from "./AlumniProfile.module.scss";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@/assets/vectors/linkedin.svg";
import { StaticImageData } from "next/image";

type Props = {
  image: string | StaticImageData;
  name: string;
  job: string;
  company: string;
  linkedIn: string;
};

const AlumniProfile = ({ image, name, job, company, linkedIn }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className={styles.profileImage}
        />
        <div className={styles.info}>
          <span className={styles.name}>
            {name} - {job}
          </span>
          <span className={styles.company}>{company}</span>
        </div>
      </div>
      <Link href={linkedIn}>
        <LinkedInIcon className={styles.icon} />
      </Link>
    </div>
  );
};

export default AlumniProfile;
