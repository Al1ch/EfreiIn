"use client";
import React, { useState } from "react";
import CompanyBanner from "../CompanyBanner/CompanyBanner";
import styles from "./CompanyProfile.module.scss";
import cn from "classnames";

const CompanyProfile = () => {
  const [tab, setTabValue] = useState("home");

  return (
    <div className={styles.container}>
      <CompanyBanner />
      <div className={styles.tabContainer}>
        <button
          className={cn(styles.tab, { [styles.active]: tab === "home" })}
          onClick={() => setTabValue("home")}
        >
          Accueil
        </button>
        <button
          className={cn(styles.tab, { [styles.active]: tab === "about" })}
          onClick={() => setTabValue("about")}
        >
          A propos
        </button>
        <button
          className={cn(styles.tab, { [styles.active]: tab === "event" })}
          onClick={() => setTabValue("event")}
        >
          Evenement
        </button>
        <button
          className={cn(styles.tab, { [styles.active]: tab === "alumni" })}
          onClick={() => setTabValue("alumni")}
        >
          Alumni
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
