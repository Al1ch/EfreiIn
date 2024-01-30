import React, { useEffect, useState } from "react";
import KpiCard from "../KpiCard/KpiCard";
import styles from "./HomeTab.module.scss";
import { useParams } from "next/navigation";

type Props = {
  data: any;
  setTabState: (tab: string) => void;
};

const HomeTab = ({ setTabState, data }: Props) => {
  return (
    <div className={styles.homeTabContent}>
      <div className={styles.kpiSection}>
        <KpiCard title="Nombre d'employés" value={data.column_values[1].text} />
        <KpiCard
          title="Nombre de stagiaires"
          value={data.column_values[6].text}
        />
        <KpiCard
          title="Nombre d'alternants"
          value={data.column_values[7].text}
        />
      </div>
      <div className={styles.companyInfoContainer}>
        <div className={styles.companyDescription}>
          <h3>Infos</h3>
          <p
            className={styles.text}
          >{`HomeTab.data.column_values[<info_index>].text`}</p>
        </div>
        <div className={styles.showMore} onClick={() => setTabState("about")}>
          <p>Afficher tous les détails</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
