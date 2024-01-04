"use client";
import React, { useState } from "react";
import CompanyBanner from "../CompanyBanner/CompanyBanner";
import styles from "./CompanyProfile.module.scss";
import cn from "classnames";
import HomeTab from "@/components/HomeTab/HomeTab";
import AlumniTab from "@/components/AlumniTab/AlumniTab";
import AboutTab from "@/components//AboutTab/AboutTab";

const CompanyProfile = () => {
  const [tab, setTabValue] = useState("home");

  return (
    <div
      className={cn(styles.containerProfile, {
        [styles.removeBackground]: tab === "home" || tab === "about",
      })}
    >
      <div
        className={cn(styles.container, {
          [styles.removeShadow]: tab !== "home",
        })}
      >
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

      {tab === "home" && <HomeTab />}
      {tab === "about" && <AboutTab />}
      {tab === "alumni" && <AlumniTab />}
      {/* {tab === "event" && <div>Event</div>} */}
    </div>
  );
};

export default CompanyProfile;
