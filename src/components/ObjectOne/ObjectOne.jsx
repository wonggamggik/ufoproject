import React from "react";

export default function ObjectOne() {
  return (
    <div className="wrapper">
      <article>
        <div className="wrapper-inner">
          <Product />
          <Content />
        </div>
        {/* ::after - 구분선 나오게 할 부분 */}
      </article>
    </div>
  );
}
