import React from "react";
import styles from "./ObjectImage.module.css";

export default function ObjectImage() {
  return (
    <div>
      <img
        className={`${styles.picture} ${styles.one}`}
        src="/images/flyclapping/flyclapping_orange.png"
        alt="flyclapping_orange"
      ></img>
      <img
        className={`${styles.picture} ${styles.two}`}
        src="/images/flyclapping/flyclapping_white.png"
        alt="flyclapping_white"
      ></img>
      <img
        className={`${styles.picture} ${styles.three}`}
        src="/images/flyclapping/flyclapping_yellow.png"
        alt="flyclapping_yellow"
      ></img>
    </div>
  );
}
