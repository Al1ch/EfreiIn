"use client";
import React, { useState } from "react";
import styles from "./FilterDropDown.module.scss";
import Chevron from "@/assets/vectors/chevron.svg";
import cn from "classnames";

type Props = {
  title: string;
  options: string[];
  handleCheck: (option: string, filterType: string) => void;
  isOpen: boolean;
  handleClick: () => void;
};

const FilterDropDown = ({
  title,
  options,
  handleCheck,
  handleClick,
  isOpen,
}: Props) => {
  return (
    <div className={cn(styles.container, { [styles.clickedButton]: isOpen })}>
      <button className={styles.labelContainer} onClick={handleClick}>
        <span className={styles.label}> {title.toLowerCase()} </span>
        <Chevron className={styles.icon} />
      </button>
      <div className={cn(styles.dropDown, { [styles.clicked]: isOpen })}>
        {options.map((option) => (
          <div key={option} className={styles.itemDropDown}>
            <input
              type="checkbox"
              onClick={() => handleCheck(option, title.toLowerCase())}
            ></input>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropDown;

// const handleAllFilters = (entreprise: any) => {
//   if (
//     filter.secteur.length === 0 &&
//     searchParams.get("search") === null &&
//     filter.taille.length === 0
//   )
//     return true;

//   const entrepriseEmployee = Number(
//     entreprise.column_values[2].value
//       .split("")
//       .filter((letter: string) => letter != '"')
//       .join("")
//   );

//   const filteredBySearch =
//     entreprise.name
//       .toLowerCase()
//       .includes(searchParams.get("search")?.toString().toLowerCase()) ||
//     searchParams.get("search") === null;

//   const filteredBySector = filter.secteur.includes(
//     entreprise.column_values[1].text
//       .split("")
//       .filter((letter: string) => letter != '"')
//       .join("") ||
//       (filter.secteur.length === 0 && filter.taille.length !== 0)
//   );

//   const sizeDictionnary = {
//     "< 10 salariés": entrepriseEmployee < 10,
//     "Entre 10 et 1000 salariés": entrepriseEmployee < 1000,
//     "> 1000 salariés ": entrepriseEmployee > 1001,
//   };
//   const filteredBySize = filter.taille.some((size) => {
//     return (
//       sizeDictionnary[size as keyof typeof sizeDictionnary] ||
//       (filter.secteur.length !== 0 && filter.taille.length === 0)
//     );
//   });

//   return filteredBySearch && (filteredBySize || filteredBySector);
