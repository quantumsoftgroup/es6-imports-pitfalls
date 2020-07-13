import * as React from "react";
import { useSelector } from "react-redux";

const ComponentA = () => {
  const data = useSelector((store) => store.a);

  return <h1>{data.title}</h1>;
};

export default ComponentA;
