import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lamadev</div>
      <div className={styles.text}>
        Lama Creative Thought Agency All rights Reserved
      </div>
    </div>
  );
};

export default Footer;
