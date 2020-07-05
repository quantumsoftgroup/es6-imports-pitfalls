import { combineReducers, createStore } from "redux";
import reducerA, { IFeatureA } from "./a/ducksA";
import reducerB, { IFeatureB } from "./b/ducksB";
import reducerC, { IFeatureC } from "./c/ducksC";

export interface IStore {
  a: IFeatureA;
  b: IFeatureB;
  c: IFeatureC;
}

const configureStore = () => {
  return createStore(
    combineReducers({
      a: reducerA,
      b: reducerB,
      c: reducerC,
    })
  );
};

export default configureStore;
