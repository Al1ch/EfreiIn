import React from "react";
import styles from "./page.module.scss";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";
export default async function EntreprisePage() {
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

        {/* <div className={styles.location}>Localisation</div>
        <div>Secteur</div>
        <div>Taille</div> */}
      </div>

      <div className={styles.cardListContainer}>
        <EntrepriseCard
          banner={sgBanner}
          logo={sgLogo}
          name="Société Générale"
          sector="Banque"
          location="Paris"
          size="> 1000 employés"
        />
        <EntrepriseCard
          banner={sgBanner}
          logo={sgLogo}
          name="Société Générale"
          sector="Banque"
          location="Paris"
          size="> 1000 employés"
        />
        <EntrepriseCard
          banner={sgBanner}
          logo={sgLogo}
          name="Société Générale"
          sector="Banque"
          location="Paris"
          size="> 1000 employés"
        />
        <EntrepriseCard
          banner={sgBanner}
          logo={sgLogo}
          name="Société Générale"
          sector="Banque"
          location="Paris"
          size="> 1000 employés"
        />
      </div>
    </div>
  );
}
