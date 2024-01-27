"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "@/assets/vectors/search.svg";
import { useRouter } from "next/navigation";
import CloseIcon from "@/assets/vectors/close.svg";
import Button from "@/components/Button/Button";
import cn from "classnames";
import { useParams, usePathname } from "next/navigation";

type Props = {
  placeholder?: string;
  backgroundColor?: string;
  rounded?: boolean;
};

const SearchBar = ({ placeholder, backgroundColor, rounded }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleDelete = () => {
    setSearchValue("");
    router.replace(`${pathName}`);
  };

  useEffect(() => {
    const handleSubmit = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        router.replace(`?search=${searchValue}`);
      }
    };

    document.addEventListener("keydown", handleSubmit);

    return () => {
      document.removeEventListener("keydown", handleSubmit);
    };
  }, [router, searchValue]);

  return (
    <div
      className={cn(
        styles.container,
        { [styles.rounded]: rounded },
        { [styles.grey]: backgroundColor === "grey" }
      )}
    >
      <SearchIcon className={styles.icon} />
      <form>
        <input
          type="text"
          className={styles.input}
          onChange={handleChange}
          placeholder={placeholder}
          value={searchValue}
        />
      </form>

      <Button size="sm" onClick={handleDelete}>
        <CloseIcon
          className={cn(styles.closeIcon, { [styles.appear]: searchValue })}
        />
      </Button>
    </div>
  );
};

export default SearchBar;
