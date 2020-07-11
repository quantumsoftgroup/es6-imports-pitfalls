export interface IDataA {
  title: string;
}

export default (state: IDataA): IDataA => {
  return { title: "Feature A" };
};
