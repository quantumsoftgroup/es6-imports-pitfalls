import * as React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../configureStore";
import { IFeatureA } from "./ducksA";

const FeatureA = () => {
  const data = useSelector<IStore, IFeatureA>((store) => store.a);

  return <h1>{data.title}</h1>;
};

export default FeatureA;
