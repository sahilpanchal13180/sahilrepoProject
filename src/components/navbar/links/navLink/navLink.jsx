"use client";
import React from "react";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.tittle}
    </Link>
  );
};

export default NavLink;
