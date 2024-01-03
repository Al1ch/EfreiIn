import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import AlumniProfile from "../AlumniProfile/AlumniProfile";
import styles from "./AlumniTab.module.scss";
import profilePic from "@/assets/images/Alain_Profile.jpg";

const AlumniTab = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <AlumniProfile
        image={profilePic}
        name="John Doe"
        job="Software Engineer"
        company="Google"
        linkedIn="https://www.linkedin.com/"
      />
    </div>
  );
};

export default AlumniTab;
