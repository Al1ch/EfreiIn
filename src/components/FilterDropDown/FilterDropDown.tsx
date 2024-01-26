"use client";
import React, { useState } from "react";
import styles from "./FilterDropDown.module.scss";
import Chevron from "@/assets/vectors/chevron.svg";
import cn from "classnames";

type Props = {
  title: string;
  options: string[];
};

const FilterDropDown = ({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(styles.container, { [styles.clickedButton]: isOpen })}>
      <button
        className={styles.labelContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.label}> {title} </span>
        <Chevron className={styles.icon} />
      </button>
      <div className={cn(styles.dropDown, { [styles.clicked]: isOpen })}>
        {options.map((option) => (
          <span key={option} className={styles.itemDropDown}>
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterDropDown;
