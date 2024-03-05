import { React, useState, useEffect } from "react";
import ObjectOne from "../ObjectOne/ObjectOne";
import styles from "./ObjectsListBody.module.css";

export default function ObjectsListBody() {
  const [objects, setObjects] = useState([]);
  const notObjects = [...objects];
  const shuffledObjects = shuffleObject(notObjects);

  useEffect(() => {
    fetch("data/objects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 받아옴");
        setObjects(data);
      });
    return () => {
      console.log("Component Upmount");
    };
  }, []);

  return (
    <div>
      {shuffledObjects.map((object, index) => (
        <ObjectOne object={object} index={index} key={index} />
      ))}
    </div>
  );
}

function shuffleObject(objects) {
  for (let i = objects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [objects[i], objects[j]] = [objects[j], objects[i]];
  }
  return objects;
}
