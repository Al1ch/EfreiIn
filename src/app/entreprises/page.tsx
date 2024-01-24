// import React from "react";

"use client";
import styles from "./page.module.scss";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";

import React, { useState, useEffect } from 'react';

export default function EntreprisePage() {
//   const [entrepriseData, setEntrepriseData] = useState([]);
  const [entrepriseData, setEntrepriseData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.monday.com/v2", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8'
          },
          body: JSON.stringify({
            // 'query': 'query { boards (ids: 1363523728) { name columns {title id type} items { name group { id } column_values { id value text } } } } state id permissions }}'
            'query': 'query { boards (ids: 1363523728) { name columns { title id type } items_page { items { name group { id } column_values { id value text } } } } }'
            // 'query' : 'query { boards (ids: 1363523728) { items (ids: [1363523742, 1363523746]) { column_values { id value text } group { id } id name state } } }'
        })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Log the API response to the console

        const boardItems = data.data.boards[0].items_page.items;

        setEntrepriseData(boardItems);
        console.log('Board:', boardItems); // Log the API response to the console

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render

return (
    <div className={styles.container}>
      <div className={styles.researchFilter}>
        <SearchBar />
        <FilterDropDown
            title="Secteur"
            options={["Banque", "Assurance", "Finance"]}
        />
        <FilterDropDown
        title="Secteur"
        options={["Banque", "Assurance", "Finance"]}
        />
        <FilterDropDown
        title="Secteur"
        options={["Banque", "Assurance", "Finance"]}
        />
    </div>

    <div className={styles.cardListContainer}>
        {entrepriseData.map((entreprise) => (
        <EntrepriseCard
            banner={sgBanner}
            logo={sgLogo}
            name={entreprise.name}
            sector={entreprise.column_values[1].value}
            location="where??????" // y a pas colonne location 
            size={entreprise.column_values[2].value}
        />
        ))}
    </div>
</div>
);
}


