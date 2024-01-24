'use client';
import React from "react";
import styles from "./page.module.scss";
import CompanyBanner from "@/components/CompanyBanner/CompanyBanner";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import { useParams } from "next/navigation";
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";

export default function EntreprisePage() {

  const { entrepriseId } = useParams();
  console.log('Params:', entrepriseId)

  return (
    <div className={styles.container}>
      <CompanyProfile entrepriseId={entrepriseId} />
    </div>
  );
}
