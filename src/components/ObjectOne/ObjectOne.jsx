import React from "react";
import ObjectImage from "./ObjectImage/ObjectImage";
import ObjectText from "./ObjectText/ObjectText";
import styles from "./ObjectOne.module.css";

export default function ObjectOne() {
  return (
    <div className={styles.wrapper}>
      <article>
        <div className={styles.wrapper_inner}>
          <ObjectImage />
          <ObjectText />
        </div>
        {/* ::after - 구분선 나오게 할 부분 */}
      </article>
    </div>
  );
}
