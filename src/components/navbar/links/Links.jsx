"use client";
import React, { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./Links.module.css";
import Image from "next/image";
const links = [
  {
    tittle: "HomePage",
    path: "/",
  },
  {
    tittle: "About",
    path: "/about",
  },
  {
    tittle: "Contact",
    path: "/contact",
  },
  {
    tittle: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [opens, setOpens] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div>
      <div className={styles.Links}>
        {links.map((link) => (
          <NavLink item={link} key={link.tittle}></NavLink>
        ))}
        {session ? (
          isAdmin && (
            <>
              <NavLink item={{ tittle: "Admin", path: "/admin" }} />
              <button className={styles.Logout}>LogOut</button>
            </>
          )
        ) : (
          <NavLink item={{ tittle: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.MobileBtn}
        src="/menu.png"
        alt="menu"
        onClick={() => setOpens((prev) => !prev)}
        height={30}
        width={30}
      />
      {opens && (
        <div className={styles.MobileLinks}>
          {links.map((link) => {
            return <NavLink item={link} key={link.tittle}></NavLink>;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
