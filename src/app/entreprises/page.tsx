"use client";
import styles from "./page.module.scss";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
type Filter = {
  secteur: string[];
  taille: string[];
  localisation: string[];
};

export default function EntreprisePage() {
  const searchParams = useSearchParams();
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
              "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMxNTYyNjUyMiwiYWFpIjoxMSwidWlkIjo1NTE5NTA0MSwiaWFkIjoiMjAyNC0wMS0zMFQxMjoyNDo0MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjEwMzY3NDYsInJnbiI6ImV1YzEifQ.sQiLsu6ClUQX4kk0GvZlWCJWapFAvQAFMdC-lCNgM4w",
          },
          body: JSON.stringify({
            query:
              "query { boards (ids: 1380938152) { name columns { title id type } items_page { items { id name group { id } column_values { id value text } } } } }",
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
  }, [searchParams]);

  const handleAllFilters = (entreprise: any) => {
    if (filter.secteur.length === 0 && searchParams.get("search") === null)
      return true;

    const entrepriseEmployee = Number(
      entreprise.column_values[2].value
        .split("")
        .filter((letter: string) => letter != '"')
        .join("")
    );

    const filteredBySearch =
      entreprise.name
        .toLowerCase()
        .includes(searchParams.get("search")?.toString().toLowerCase()) ||
      searchParams.get("search") === null;

    const filteredBySector = filter.secteur.includes(
      entreprise.column_values[1].text
        .split("")
        .filter((letter: string) => letter != '"')
        .join("") || filter.secteur.length === 0
    );

    return filteredBySearch && filteredBySector;
  };

  const filteredEntrepriseData = entrepriseData.filter((entreprise) =>
    handleAllFilters(entreprise)
  );

  const sectors = entrepriseData.map((entreprise) => {
    return entreprise.column_values[1].text;
  });

  return (
    <div className={styles.container}>
      <div className={styles.researchFilter}>
        <SearchBar placeholder="Rechercher une entreprise" />
        <FilterDropDown
          title="Secteur"
          options={[...Array.from(new Set(sectors))]}
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
            logo={entreprise.column_values[12].text} // column index 12
            name={entreprise.name}
            sector={entreprise.column_values[1].text}
            location={entreprise.column_values[13].text}
            size={`${entreprise.column_values[2].text} salariés`}
          />
        ))}
      </div>
    </div>
  );
}
