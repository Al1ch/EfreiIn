"use client";
import React, { useEffect, useState } from "react";
import CompanyBanner from "../CompanyBanner/CompanyBanner";
import styles from "./CompanyProfile.module.scss";
import cn from "classnames";
import HomeTab from "@/components/HomeTab/HomeTab";
import AlumniTab from "@/components/AlumniTab/AlumniTab";
import AboutTab from "@/components//AboutTab/AboutTab";
import { useParams } from "next/navigation";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";

const CompanyProfile: React.FC<{ entrepriseId: any }> = ({ entrepriseId }) => {
  const [entrepriseData, setEntrepriseData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTabValue] = useState("home");

  async function fetchData() {
    try {
      const response = await fetch("https://api.monday.com/v2", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8",
        },
        body: JSON.stringify({
          query:
            "query { boards (ids: 1363523728) { name columns { title id type } items_page { items { id name group { id } column_values { id value text } } } } }",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const boardItems = data.data.boards[0].items_page.items.filter(
        (data: any) => {
          return data.name.split(" ").join("").toLowerCase() === entrepriseId;
        }
      );
      setEntrepriseData({ ...boardItems[0] });
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render

  if (isLoading) return <div>loading...</div>;
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
        <CompanyBanner
          id={entrepriseData.id}
          banner={sgBanner}
          logo={sgLogo}
          name={entrepriseData.name}
          description={"test"}
          details="{CompanyProfile.CompanyBanner.details}"
        />
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
      {tab === "home" && entrepriseData && (
        <HomeTab data={entrepriseData} setTabState={setTabValue} />
      )}
      {tab === "about" && entrepriseData && <AboutTab data={entrepriseData} />}
      {tab === "alumni" && entrepriseData && (
        <AlumniTab data={entrepriseData} />
      )}
      {/* {tab === "event" && <div>Event</div>} */}
    </div>
  );
};

export default CompanyProfile;
