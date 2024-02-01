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

const CompanyProfile: React.FC<{ entrepriseId: any }> = ({ entrepriseId }) => {
  const [entrepriseData, setEntrepriseData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTabValue] = useState("home");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.monday.com/v2", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMxNTYyNjUyMiwiYWFpIjoxMSwidWlkIjo1NTE5NTA0MSwiaWFkIjoiMjAyNC0wMS0zMFQxMjoyNDo0MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjEwMzY3NDYsInJnbiI6ImV1YzEifQ.sQiLsu6ClUQX4kk0GvZlWCJWapFAvQAFMdC-lCNgM4w",
          },
          body: JSON.stringify({
            query: `query { boards (ids: 1380938152) { items_page (query_params: { ids: [${entrepriseId}] }) { items { column_values { id value text } group { id } id name state } } } }`,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          console.log("OKKK");
        }

        const data = await response.json();

        console.log("data", data);

        setEntrepriseData(data.data.boards[0].items_page.items[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, [entrepriseId]); // Empty dependency array means this effect runs once after the first render

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
          logo={entrepriseData.column_values[12].text}
          name={entrepriseData.name}
          slogan={entrepriseData.column_values[15].text}
          details={`${entrepriseData.column_values[1].text} - ${entrepriseData.column_values[13].text} - ${entrepriseData.column_values[2].text} employés`}
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
