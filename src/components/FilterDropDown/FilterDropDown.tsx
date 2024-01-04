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
    <button className={styles.container} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.labelContainer}>
        <span className={styles.label}> Secteur </span>
        <Chevron className={styles.icon} />
      </div>
      {options.map((option) => (
        <div
          className={cn(styles.dropDown, { [styles.clicked]: isOpen })}
          key={option}
        >
          <span>{option}</span>
        </div>
      ))}
    </button>
  );
};

export default FilterDropDown;
