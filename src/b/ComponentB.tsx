import * as React from "react";
import { useSelector } from "react-redux";
import IStore from "../IStore";
import IDataB from "./IDataB";

const ComponentB = () => {
  const data = useSelector<IStore, IDataB>((store) => store.b);

  return <h1>{data.title}</h1>;
};

export default ComponentB;
