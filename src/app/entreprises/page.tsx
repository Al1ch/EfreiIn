import React from "react";
import styles from "./page.module.scss";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import sgBanner from "@/assets/images/sg-banner.jpg";
import sgLogo from "@/assets/images/sgLogo.png";
export default async function EntreprisePage() {
  return (
    <div className={styles.container}>
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
