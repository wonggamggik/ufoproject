import React from "react";
import styles from "./TitleHeader.module.css";

export default function TitleHeader() {
  return (
    <div className={styles.header}>
      {/* Title */}
      <a href="/">
        <div className={styles.ufo}>
          <span>🛸</span>
        </div>
        <h1 className={styles.title__main}>
          <span>U</span>seless <span>F</span>ucking <span>O</span>bjects
        </h1>
      </a>
      {/* 문구 */}
      <h2 className={styles.title__sub}>No-Idea Yes-Useless</h2>
      {/* 제안 - 개발자 이야기  / RSS가 있으나 무엇인지 몰라 보류*/}
      <h2>
        <div className={styles.links}>
          <a className={styles.links__suggest} href="/" target="_blank">
            물건 제안
          </a>
          -
          <a
            className={styles.links__producer}
            href="https://github.com/wonggamggik"
            target="_blank"
          >
            제작자 소개
          </a>
        </div>
      </h2>
    </div>
  );
}
