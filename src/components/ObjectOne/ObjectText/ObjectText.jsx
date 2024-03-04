import React from "react";
import styles from "./ObjectText.module.css";

export default function ObjectText() {
  const title = "파리 박수";
  const site = "쿠팡";

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        '파리 박수’는 아이들이 즐길 수 있는 장난감이면서도, 실제로 파리를 잡는
        기능을 가진 독특한 제품입니다. 버튼을 누르면 박수 소리를 내며 움직이는
        이 장난감은 아이들에게 재미를 주고, 동시에 가정에서 해충을 효과적으로
        제거하는데 도움을 줍니다. 이렇게 재미와 실용성을 동시에 갖춘 '파리
        박수’는 아이들에게 완벽한 선물이 될 수 있습니다. '파리 박수’는 그
        자체로도 흥미롭지만, 그 이면에는 과학과 기술이 녹아있습니다. 이 장난감은
        소리와 움직임을 통해 아이들의 감각을 자극하고, 그들의 호기심을 자극하여
        세상을 탐구하게 합니다. 또한, 파리를 잡는 기능은 아이들에게 생태계와
        생명 과학에 대한 이해를 높이는 좋은 기회를 제공합니다. 이런 방식으로
        '파리 박수’는 아이들에게 재미있는 놀이 경험을 제공하는 동시에, 그들의
        학습과 성장을 지원하는 중요한 도구가 됩니다. 이 장난감을 통해 아이들은
        즐겁게 놀면서도 다양한 학문 분야에 대한 흥미와 이해를 높일 수 있습니다.
      </p>
      <a
        href="https://www.coupang.com/vp/products/6528201285?itemId=14488982001&vendorItemId=81732167530&q=%EC%93%B8%EB%8D%B0%EC%97%86%EB%8A%94+%EB%AC%BC%EA%B1%B4&itemsCount=27&searchId=4c2f82c40c1d46f8805b1141b6da4931&rank=23&isAddedCart="
        rel="nofollow"
        className={styles.linkButton}
        target="_blank"
      >
        {title} to {site}
        <span className={styles.logo}></span>
      </a>
    </div>
  );
}
