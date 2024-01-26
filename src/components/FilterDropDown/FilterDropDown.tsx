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
  // const [filter, setFilter] = useState<string>({
  //   Banque: false,
  //   Assurance: false,
  //   Immobilier: false,
  // });

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
