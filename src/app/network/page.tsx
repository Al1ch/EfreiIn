import React from "react";
import styles from "./page.module.scss";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerListLayout}>
        Personne qui pourrez vous intéresser
        <div className={styles.listContainer}>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default page;
