import React from "react";

export default function TitleHeader() {
  return (
    <div>
      {/* Title */}
      <a href="/">
        <div className="ufo">
          <span>🛸</span>
        </div>
        <h1 className="title__main">Useless Fucking Objects</h1>
      </a>
      {/* 문구 */}
      <h2 className="title__sub">No-Idea Yes-Useless</h2>
      {/* 제안 - 개발자 이야기  / RSS가 있으나 무엇인지 몰라 보류*/}
      <h2>
        <div className="links">
          <a href="/">물건 제안</a>-<a href="/">제작자 소개</a>
        </div>
      </h2>
    </div>
  );
}
