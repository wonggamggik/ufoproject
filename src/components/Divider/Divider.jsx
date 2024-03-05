import React from "react";
import styles from "./Divider.module.css";

export default function Divider({ reverse }) {
  return (
    <div>
      {reverse ? (
        <div className={styles.waveReverse}>
          <img src="/images/divider/waves-reverse.svg"></img>
        </div>
      ) : (
        <div className={styles.wave}>
          <img src="/images/divider/waves.svg"></img>
        </div>
      )}
    </div>
  );
}
