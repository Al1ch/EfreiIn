import React from "react";
import KpiCard from "../KpiCard/KpiCard";
import styles from "./HomeTab.module.scss";

const HomeTab = () => {
  return (
    <div className={styles.homeTabContent}>
      <div className={styles.kpiSection}>
        <KpiCard title="Nombre d'employés" value="100 Mds" />
        <KpiCard title="Nombre de stagiaires" value="10 Mds" />
        <KpiCard title="Nombre de stagiaires" value="10 Mds" />
      </div>
      <div className={styles.companyInfoContainer}>
        <div className={styles.companyDescription}>
          <h3>Infos</h3>
          <p className={styles.text}>
            Société Générale est l’un des tout premiers groupes européens de
            services financiers. S’appuyant sur un modèle diversifié et intégré,
            le Groupe allie solidité financière, dynamique d’innovation et
            stratégie de croissance durable et responsable. Engagée dans les
            transformations positives des sociétés et des économies, Société
            Générale agit chaque jour avec ses équipes pour construire ensemble,
            avec ses clients, un avenir meilleur et durable en apportant des
            solutions financières responsables et innovantes.
          </p>
        </div>
        <div className={styles.showMore}>
          <p>Afficher tous les détails</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
