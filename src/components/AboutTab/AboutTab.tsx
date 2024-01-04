import React from "react";
import styles from "./AboutTab.module.scss";
import Link from "next/link";

// type Props = {
//   description: string;
//   website: string;
//   sector: string;
//   size: string;
// };

const AboutTab = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}> Présentation</h2>
      <div className={styles.contentContainer}>
        <p className={styles.description}>
          Société Générale est une banque européenne de premier plan avec 117
          000 collaborateurs au service de 25 millions de clients dans plus de
          60 pays à travers le monde. Nous accompagnons le développement de nos
          économies depuis près de 160 ans, en proposant à nos clients
          entreprises, institutionnels et particuliers un large éventail de
          services de conseil et de solutions financières à valeur ajoutée. Nos
          relations durables et de confiance avec les clients, notre expertise
          de pointe, notre capacité d’innovation unique, nos compétences ESG et
          nos franchises leader font partie de notre ADN et servent le cœur de
          notre objectif : créer de la valeur durable pour toutes nos parties
          prenantes. Le Groupe opère dans trois domaines d’activités
          complémentaires, intégrant des offres ESG pour l’ensemble de ses
          clients : • La Banque de détail en France, Banque Privée et Assurances
          avec la banque de détail SG, les activités de banque privée, les
          activités d’assurance et BoursoBank, leader de la banque en ligne. •
          La Banque de Grande Clientèle et Solutions Investisseurs, acteur de
          premier plan qui propose des solutions sur mesure aux grandes
          entreprises et investisseurs avec un leadership mondial unique dans
          les dérivés actions, les financements structurés et l’ESG. • La Banque
          de détail à l’international, Services de mobilité et de leasing,
          regroupant des banques universelles bien établies sur leurs marchés
          (en République tchèque, en Roumanie et dans plusieurs pays d’Afrique),
          Ayvens, acteur mondial de la mobilité durable, ainsi que des activités
          de financements spécialisés. Engagé à construire avec ses clients un
          avenir meilleur et durable, le Groupe entend être un partenaire de
          premier plan dans la transition environnementale et le développement
          durable en général. Le Groupe figure dans les principaux indices de
          développement durable dont : DJSI (Europe), FTSE4Good (Global et
          Europe), Bloomberg Gender-Equality Index.
        </p>
        <div className={styles.websiteSection}>
          <h3 className={styles.titleInfo}>Site web</h3>
          <Link href="https://www.societegenerale.com" className={styles.link}>
            {" "}
            https://www.societegenerale.com
          </Link>
        </div>
        <div className={styles.sectorSection}>
          <h3 className={styles.titleInfo}>Sector</h3>
          <span className={styles.text}>Services bancaires</span>
        </div>
        <div className={styles.sizeSection}>
          <h3 className={styles.titleInfo}>{"Taille de l'entreprise"}</h3>
          <span className={styles.text}>10 001 employés et plus</span>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
