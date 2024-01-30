import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import AlumniProfile from "../AlumniProfile/AlumniProfile";
import styles from "./AlumniTab.module.scss";
import profilePic1 from "@/assets/images/profilepic_1.png";
import profilePic2 from "@/assets/images/profilepic_2.png";
import profilePic3 from "@/assets/images/profilepic_3.png";
import profilePic4 from "@/assets/images/profilepic_4.png";
import profilePic5 from "@/assets/images/profilepic_5.png";


const getRandomElement = <T,>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const profilePics = [profilePic1, profilePic2, profilePic3, profilePic4, profilePic5];

// const AlumniTab = () => {
const AlumniTab: React.FC<{ data: any }> = ({ data }) => {
  
  console.log('AlumniTab ENTREPRISE DATA:', data)

  const randomPic = getRandomElement(profilePics);

  return (
    <div className={styles.container}>
      <SearchBar />
      <AlumniProfile
        image={randomPic}
        name="John Doe"
        job="Software Engineer"
        company="Google"
        linkedIn="https://www.linkedin.com/"
      />
    </div>
  );
};

export default AlumniTab;
