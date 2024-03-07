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
        className={`${styles.linkButton} ${getSiteStyleName(site)}`}
        target="_blank"
      >
        {title} to {site}
        <img className={styles.logo} src={siteIcon} alt="site"></img>
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
      return "/images/icons/ufo-spaceship-svgrepo-com.svg";
    case "아이디어스":
      return "/images/icons/ufo-spaceship-svgrepo-com.svg";
    case "펀샵":
      return "/images/icons/ufo-spaceship-svgrepo-com.svg";
    default:
      return;
  }
}
