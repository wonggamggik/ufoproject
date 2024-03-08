import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.developer}>
        Useless Fuxxing Objects by UNUMUNU
      </span>
      <span className={styles.commentary}>
        현재 판매 사이트 정책으로 인해 물품 사진과 링크를 사용할 수 없기에 다른
        사진과 사이트로 대체
      </span>
    </div>
  );
}
