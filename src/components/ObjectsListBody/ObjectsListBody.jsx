import { React, useState, useEffect } from "react";
import ObjectOne from "../ObjectOne/ObjectOne";

export default function ObjectsListBody() {
  const [objects, setObjects] = useState([]);

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
      {objects.map((object) => (
        <ObjectOne object={object} />
      ))}
    </div>
  );
}
