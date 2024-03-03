import React from "react";
import ObjectProduct from "./ObjectImage/ObjectImage";
import ObjectContent from "./ObjectText/ObjectContent";

export default function ObjectOne() {
  return (
    <div className="wrapper">
      <article>
        <div className="wrapper-inner">
          <ObjectProduct />
          <ObjectContent />
        </div>
        {/* ::after - 구분선 나오게 할 부분 */}
      </article>
    </div>
  );
}
