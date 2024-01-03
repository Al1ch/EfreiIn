import React from "react";
import styles from "./KpiCard.module.scss";

type Props = {
  title: string;
  value: string;
};

const KpiCard = ({ title, value }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default KpiCard;
