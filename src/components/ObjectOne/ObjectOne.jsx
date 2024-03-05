import React from "react";
import ObjectImage from "./ObjectImage/ObjectImage";
import ObjectText from "./ObjectText/ObjectText";
import styles from "./ObjectOne.module.css";

export default function ObjectOne({ object }) {
  // console.log(object);
  return (
    <div className={styles.wrapper}>
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
