import * as React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../configureStore";
import { IFeatureB } from "./ducksB";

const FeatureB = () => {
  const data = useSelector<IStore, IFeatureB>((store) => store.b);

  return <h1>{data.title}</h1>;
};

export default FeatureB;
