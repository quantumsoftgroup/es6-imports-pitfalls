import * as React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../configureStore";
import { IDataA } from "./reducerA";

const ComponentA = () => {
  const data = useSelector<IStore, IDataA>((store) => store.a);

  return <h1>{data.title}</h1>;
};

export default ComponentA;
