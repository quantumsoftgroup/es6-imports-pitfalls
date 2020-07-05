export interface IFeatureA {
  title: string;
}

export default (state: IFeatureA): IFeatureA => {
  return { title: "Feature A" };
};
