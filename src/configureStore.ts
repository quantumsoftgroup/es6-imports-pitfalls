import { combineReducers, createStore } from "redux";
import reducerA, { IFeatureA } from "./a/ducksA";
import reducerB, { IFeatureB } from "./b/ducksB";

export interface IStore {
  a: IFeatureA;
  b: IFeatureB;
}

const configureStore = () => {
  return createStore(
    combineReducers({
      a: reducerA,
      b: reducerB,
    })
  );
};

export default configureStore;
