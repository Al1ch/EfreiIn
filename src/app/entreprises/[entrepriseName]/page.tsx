import React from "react";
import styles from "./page.module.scss";
import CompanyBanner from "@/components/CompanyBanner/CompanyBanner";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";

export default async function EntreprisePage() {
  return (
    <div className={styles.container}>
      <CompanyProfile />
    </div>
  );
}
