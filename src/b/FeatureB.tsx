import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../configureStore";
import { IFeatureB } from "./ducksB";

const FeatureB = () => {
  const data = useSelector<IStore, IFeatureB>((store) => store.b);

  return <div>{data.title}</div>;
};

export default FeatureB;
