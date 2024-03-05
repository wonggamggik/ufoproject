import React from "react";
import styles from "./ObjectDivider.module.css";

export default function ObjectDivider({ index }) {
  return (
    <div className={styles.wave}>
      {index === 0 ? null : (
        <img
          src={
            index % 2 === 0
              ? "/images/divider/split.svg"
              : "/images/divider/wavesOpacityLow.svg"
          }
          alt={index % 2 === 0 ? "split" : "waves"}
        />
      )}
    </div>
  );
}
