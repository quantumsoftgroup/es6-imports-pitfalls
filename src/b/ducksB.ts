export interface IFeatureB {
  title: string;
}

export default (state: IFeatureB): IFeatureB => {
  return {title: 'Feature B'};
};
