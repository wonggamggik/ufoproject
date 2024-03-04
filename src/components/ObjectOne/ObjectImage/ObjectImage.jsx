import React from "react";
import styles from "./ObjectImage.module.css";

export default function ObjectImage() {
  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <img
          className={styles.picture}
          src="/images/flyclapping/flyclapping_orange.png"
          alt="flyclapping_orange"
          loading="lazy"
        ></img>
        <img
          className={styles.picture}
          src="/images/flyclapping/flyclapping_white.png"
          alt="flyclapping_white"
          loading="lazy"
        ></img>
        <img
          className={styles.picture}
          src="/images/flyclapping/flyclapping_yellow.png"
          alt="flyclapping_yellow"
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}
