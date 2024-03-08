import React from "react";
import styles from "./ObjectText.module.css";

export default function ObjectText({ text }) {
  const title = text.title;
  const descriptions = text.description;
  const site = text.sell.site;
  const siteUrl = text.sell.url;

  const siteIcon = "/images/icons/ufo-spaceship-svgrepo-com.svg";

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      {descriptions.map((description, index) => (
        <p className={styles.description} key={index}>
          &nbsp;&nbsp;{description}
        </p>
      ))}
      <a
        href={siteUrl}
        rel="nofollow"
        className={`${styles.linkButton} ${site}`}
        target="_blank"
      >
        {title} to {site}
        <img className={styles.logo} src={siteIcon} alt="site"></img>
      </a>
    </div>
  );
}
