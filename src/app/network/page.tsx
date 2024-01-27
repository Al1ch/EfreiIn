import React from "react";
import styles from "./page.module.scss";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import SearchBar from "@/components/SearchBar/SearchBar";

const Network = ({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerListLayout}>
        <SearchBar
          rounded={true}
          backgroundColor="grey"
          placeholder="Rechercher un contact"
        />
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

export default Network;
