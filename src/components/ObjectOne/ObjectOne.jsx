import React from "react";
import ObjectImage from "./ObjectImage/ObjectImage";
import ObjectText from "./ObjectText/ObjectText";
import styles from "./ObjectOne.module.css";

export default function ObjectOne({ object, index }) {
  return (
    <div className={`${styles.wrapper} ${getIndexColor(index)}`}>
      <article>
        <div className={styles.wrapper_inner}>
          <ObjectImage image={object.objectImage} />
          <ObjectText text={object.objectText} />
        </div>
        {/* ::after - 구분선 나오게 할 부분 */}
      </article>
    </div>
  );
}

function getIndexColor(index) {
  if (index % 2 == 0) {
    return styles.evenBackground;
  }
  return styles.oddBackground;
}
