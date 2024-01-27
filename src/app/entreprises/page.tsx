// import React from "react";

"use client";
import styles from "./page.module.scss";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";

import React, { useState, useEffect } from "react";

type Filter = {
  secteur: string[];
  taille: string[];
  localisation: string[];
};

export default function EntreprisePage({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [entrepriseData, setEntrepriseData] = useState<any[]>([]);
  const [filterTab, setFilterTab] = useState<
    "secteur" | "taille" | "localisation"
  >();

  const [filter, setFilter] = useState<Filter>({
    secteur: [],
    taille: [],
    localisation: [],
  });

  const handleFilter = (option: string, filterType: string): void => {
    !filter.secteur.includes(option)
      ? setFilter((prev) => ({
          ...prev,
          [filterType]: [...prev[filterType as keyof typeof filter], option],
        }))
      : setFilter((prev) => ({
          ...prev,
          [filterType]: prev[filterType as keyof typeof filter].filter(
            (filterOption) => filterOption !== option
          ),
        }));
  };

  const handleActiveTab = (tab: "secteur" | "taille" | "localisation") => {
    if (filterTab === tab) {
      setFilterTab(undefined);
    } else {
      setFilterTab(tab);
    }
  };

  useEffect(() => {
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

        const boardItems = data.data.boards[0].items_page.items;
        setEntrepriseData(boardItems);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, [searchParams]); // Empty dependency array means this effect runs once after the first render

  const handleAllFilters = (entreprise: any) => {
    if (filter.secteur.length === 0 && filter.taille.length === 0) return true;

    const filteredBySearch =
      entreprise.name
        .toLowerCase()
        .includes(searchParams.search?.toString().toLowerCase()) ||
      searchParams.search === undefined;

    const filteredBySector = filter.secteur.includes(
      entreprise.column_values[1].value
    );

    // const sizeDictionnary = {
    //   "< 10 salariés": parseInt(entreprise.column_values[2].value) < 10,
    //   "Entre 10 et 1000 salariés":
    //     parseInt(entreprise.column_values[2].value) < 1000,
    //   "> 1000 salariés ": parseInt(entreprise.column_values[2].value) > 1001,
    // };

    // const filteredBySize = filter.taille.some((size) => {
    //   console.log(
    //     "BOOOLEAN",
    //     sizeDictionnary["Entre 10 et 1000 salariés"],
    //     parseInt(entreprise.column_values[2].value)
    //   );
    //   return sizeDictionnary[size as keyof typeof sizeDictionnary];
    // });

    // return filteredBySearch && (filteredBySector || filteredBySize);
    return filteredBySearch && filteredBySector;
  };

  const filteredEntrepriseData = entrepriseData.filter((entreprise) =>
    handleAllFilters(entreprise)
  );

  return (
    <div className={styles.container}>
      <div className={styles.researchFilter}>
        <SearchBar placeholder="rechercher une entreprise" />
        <FilterDropDown
          title="Secteur"
          options={["Banque", "Assurance", "Finance"]}
          handleCheck={handleFilter}
          isOpen={filterTab === "secteur"}
          handleClick={() => handleActiveTab("secteur")}
        />
        <FilterDropDown
          title="Taille"
          options={[
            "< 10 salariés",
            "Entre 10 et 1000 salariés",
            "> 1000 salariés ",
          ]}
          handleCheck={handleFilter}
          isOpen={filterTab === "taille"}
          handleClick={() => handleActiveTab("taille")}
        />
        <FilterDropDown
          title="Localisation"
          options={["île-de-france", "Assurance", "Finance"]}
          handleCheck={handleFilter}
          isOpen={filterTab === "localisation"}
          handleClick={() => handleActiveTab("localisation")}
        />
      </div>

      <div className={styles.cardListContainer}>
        {filteredEntrepriseData.map((entreprise) => (
          <EntrepriseCard
            key={entreprise.id}
            id={entreprise.id}
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
