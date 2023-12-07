export interface IAutobahn {
  roads: string[];
}

export interface IData {
  title: string;
  subtitle: string;
  identifier: string;
  description: string;
}

export type CoordinateType = {
  lat: string;
  long: string
}
export  interface IAutobahnItem {
  title: string;
  identifier: string;
  coordinate: CoordinateType,
  point: string;
  subtitle: string;
}
