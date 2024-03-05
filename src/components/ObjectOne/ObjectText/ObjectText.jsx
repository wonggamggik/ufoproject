import React from "react";
import styles from "./ObjectText.module.css";

export default function ObjectText({ text }) {
  const title = text.title;
  const descriptions = text.description;
  const site = text.sell.site;
  const siteUrl = text.sell.url;

  const siteIcon = getSiteStyleIcon(site);

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
        className={`${styles.linkButton} ${getSiteStyleName(site)}`}
        target="_blank"
      >
        {title} to {site}
        <img className={styles.logo} src={siteIcon}></img>
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

function getSiteStyleIcon(site) {
  switch (site) {
    case "쿠팡":
      return "/images/icons/coupang_logo.png";
    case "아이디어스":
      return "/images/icons/idus_logo.png";
    case "펀샵":
      return "/images/icons/funshop_logo.png";
    default:
      return;
  }
}
