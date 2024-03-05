import React from "react";
import styles from "./ObjectText.module.css";

export default function ObjectText({ text }) {
  const title = text.title;
  const descriptions = text.description;
  const site = text.sell.site;
  const siteUrl = text.sell.url;

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      {descriptions.map((description) => (
        <p className={styles.description}>&nbsp;&nbsp;{description}</p>
      ))}
      <a
        href={siteUrl}
        rel="nofollow"
        className={`${styles.linkButton} ${getSiteStyleName(site)}`}
        target="_blank"
      >
        {title} to {site}
        {/* <img className={`${styles.logo}`}></img> */}
      </a>
    </div>
  );
}

function getSiteStyleName(site) {
  switch (site) {
    case "쿠팡":
      return styles.linkButton_coupang;
    case "아이디어스":
      return styles.linkButton_idus;
    case "펀샵":
      return styles.linkButton_funshop;
    default:
      return;
  }
}
