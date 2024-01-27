"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import SearchBar from "@/components/SearchBar/SearchBar";
import CompaniesSvg from "@/assets/vectors/companies.svg";
import HomeSvg from "@/assets/vectors/home.svg";
import NetworkSvg from "@/assets/vectors/network.svg";
import EfreiLogo from "@/assets/vectors/Efrei.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <EfreiLogo className={styles.logo} />
      <SearchBar
        rounded={true}
        backgroundColor="grey"
        placeholder="Rechercher une information"
      />
      <div className={styles.itemContainer}>
        <Link href="/network" className={styles.link}>
          <span className={styles.item}>
            <NetworkSvg /> Réseau
          </span>
        </Link>
        <Link href="/home" className={styles.link}>
          <span className={styles.item}>
            <HomeSvg /> Accueil{" "}
          </span>
        </Link>
        <Link href="/entreprises" className={styles.link}>
          <span className={styles.item}>
            <CompaniesSvg />
            Entreprises
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
