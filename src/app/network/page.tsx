'use client';
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";
import sgBg from "@/assets/images/sg-banner.jpg";

export default function Network ({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [entrepriseData, setEntrepriseData] = useState<any[]>([]);

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
            query:
              "query { boards (ids: 1380732714) { name columns { title id type } items_page { items { id name group { id } column_values { id value text } } } } }",
            }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const boardItems = data.data.boards[0].items_page.items;
        console.log("BOARDITEMS", boardItems);

        setEntrepriseData(boardItems);
      } catch (error) {
        console.error("Error:", error);
      }
    }

  fetchData();
  }, [searchParams]); // Empty dependency array means this effect runs once after the first render

  return (
    <div className={styles.container}>
    <div className={styles.containerListLayout}>
    <SearchBar
      rounded={true}
      backgroundColor="grey"
      placeholder="Rechercher un contact"
    />
      Personne qui pourrez vous intéresser
    <div className={styles.listContainer}>
      {entrepriseData.map((alumni) => (
        <ProfileCard
          name={alumni.column_values[0].text}
          job={alumni.column_values[1].text}
          link={alumni.column_values[2].text}
        />
      ))}
      </div>
      </div>
      </div>
  );
};

// export default Network;
