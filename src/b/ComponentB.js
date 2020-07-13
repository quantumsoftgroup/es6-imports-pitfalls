import * as React from "react";
import { useSelector } from "react-redux";

const ComponentB = () => {
  const data = useSelector((store) => store.b);

  return <h1>{data.title}</h1>;
};

export default ComponentB;
