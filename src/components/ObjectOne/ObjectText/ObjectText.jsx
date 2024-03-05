import React from "react";
import styles from "./ObjectText.module.css";

export default function ObjectText({ text }) {
  const title = text.title;
  const description = text.description;
  const site = text.sell.site;
  const siteUrl = text.sell.url;
  // console.log(title);
  // console.log(site);
  // console.log(siteUrl);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <a
        href={siteUrl}
        rel="nofollow"
        className={styles.linkButton}
        target="_blank"
      >
        {title} to {site}
        <span className={styles.logo}></span>
      </a>
    </div>
  );
}
