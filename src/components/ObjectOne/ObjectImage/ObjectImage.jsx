import React from "react";
import styles from "./ObjectImage.module.css";

export default function ObjectImage({ image }) {
  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <img
          className={styles.picture}
          src={image[0].src}
          alt={image[0].alt}
          loading="lazy"
        ></img>
        <img
          className={styles.picture}
          src={image[1].src}
          alt={image[1].alt}
          loading="lazy"
        ></img>
        <img
          className={styles.picture}
          src={image[2].src}
          alt={image[2].alt}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}
