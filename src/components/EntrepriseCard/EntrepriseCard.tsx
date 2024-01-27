import React from "react";
import styles from "./EntrepriseCard.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Location from "@/assets/vectors/location.svg";
import Sector from "@/assets/vectors/sector.svg";
import Size from "@/assets/vectors/people.svg";
import Link from "next/link";

type Props = {
  id: String;
  banner: string | StaticImageData;
  logo: string | StaticImageData;
  name: string;
  sector: string;
  location: string;
  size: string;
};

const EntrepriseCard = ({
  id,
  banner,
  logo,
  name,
  sector,
  location,
  size,
}: Props) => {
  return (
    <div className={styles.container}>
      <Link
        href={`entreprises/${name.split(" ").join("").toLowerCase()}`}
        className={styles.link}
      >
        <div className={styles.banner}>
          <Image
            src={banner}
            width={275}
            height={100}
            alt=""
            className={styles.bannerImage}
          />
          <Image
            src={logo}
            width={100}
            height={100}
            alt=""
            className={styles.logo}
          />
        </div>
        <div className={styles.entrepriseInfo}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.infoContainer}>
            <div className={styles.infoContent}>
              <Sector className={styles.logoInfo} />
              <span className={styles.info}>{sector}</span>
            </div>
            <div className={styles.infoContent}>
              <Location className={styles.logoInfo} />
              <span className={styles.info}>{location}</span>
            </div>
            <div className={styles.infoContent}>
              <Size className={styles.logoInfo} />
              <span className={styles.info}>{size}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EntrepriseCard;
