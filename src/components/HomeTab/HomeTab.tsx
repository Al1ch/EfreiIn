import React, { useEffect, useState } from "react";
import KpiCard from "../KpiCard/KpiCard";
import styles from "./HomeTab.module.scss";
import { useParams } from "next/navigation";

// const HomeTab = ({ data }) => {
const HomeTab: React.FC<{ data: any }> = ({ data }) => {

  console.log('HomeTab ENTREPRISE DATA:', data)

  if (!data || !data.column_values) {
    return null;
  }

  return (
    <div className={styles.homeTabContent}>
      <div className={styles.kpiSection}>
        <KpiCard title="Nombre d'employés" value={data.column_values[2].text} />
        <KpiCard title="Nombre de stagiaires" value={data.column_values[7].text} />
        <KpiCard title="Nombre d'alternants" value={data.column_values[8].text} />
      </div>
      <div className={styles.companyInfoContainer}>
        <div className={styles.companyDescription}>
          <h3>Infos</h3>
          <p className={styles.text}>{`HomeTab.data.column_values[<info_index>].text`}</p>
        </div>
        <div className={styles.showMore}>
          <p>Afficher tous les détails</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
