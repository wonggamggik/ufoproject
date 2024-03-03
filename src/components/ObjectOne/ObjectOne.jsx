import React from "react";
import ObjectImage from "./ObjectImage/ObjectImage";
import ObjectText from "./ObjectText/ObjectText";

export default function ObjectOne() {
  return (
    <div className="wrapper">
      <article>
        <div className="wrapper-inner">
          <ObjectImage />
          <ObjectText />
        </div>
        {/* ::after - 구분선 나오게 할 부분 */}
      </article>
    </div>
  );
}
