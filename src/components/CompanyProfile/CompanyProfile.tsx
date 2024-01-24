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

// const CompanyProfile = () => {
const CompanyProfile: React.FC<{ entrepriseId: any }> = ({ entrepriseId }) => {
  const [thisEntrepriseData, setThisEntrepriseData] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.monday.com/v2", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'API-Version': '2023-10',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8'
          },
          body: JSON.stringify({
            'query': `query { boards (ids: 1363523728) { items_page (query_params: { ids: [${entrepriseId}] }) { items { column_values { id value text } group { id } id name state } } } }`
          })
        });

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const apiData = await response.json();
        console.log('CompanyProfile API RESPONSE:', apiData);
        
        const itemData = apiData.data.boards[0].items_page.items[0];
        setThisEntrepriseData(itemData);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [entrepriseId, thisEntrepriseData]);

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
        <CompanyBanner
            id = {thisEntrepriseData.id}
            banner={sgBanner}
            logo={sgLogo}
            name={thisEntrepriseData.name}
            description='{CompanyProfile.CompanyBanner.description}'
            details='{CompanyProfile.CompanyBanner.details}'
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

      {tab === "home" && thisEntrepriseData && <HomeTab data={thisEntrepriseData} />}
      {tab === "about" && thisEntrepriseData && <AboutTab data={thisEntrepriseData} />}
      {tab === "alumni" && thisEntrepriseData && <AlumniTab data={thisEntrepriseData} />}
      {/* {tab === "event" && <div>Event</div>} */}
    </div>
  );
};

export default CompanyProfile;
