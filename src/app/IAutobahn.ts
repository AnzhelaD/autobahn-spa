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
  lng: string;
  long: string;
};
export interface IAutobahnItem {
  title: string;
  identifier: string;
  description: string;
  coordinate: CoordinateType;
  point: string;
  subtitle: string;
}
export interface MapMarkerConfig {
  position: { lat: number; lng: number };
  label?: string;
  title?: string;
  options?: google.maps.MarkerOptions;
}

export interface IAutobahnRoadworksResponse {
  roadworks: IAutobahnItem[];
}
export interface IAutobahnWebCamsResponse {
  webcam: IAutobahnItem[];
}
export interface IAutobahnWarningResponse {
  warning: IAutobahnItem[];
}
export interface IAutobahnClosureResponse {
  closure: IAutobahnItem[];
}
export interface IAutobahnParkingLorryResponse {
  parking_lorry: IAutobahnItem[];
}
export interface IAutobahnElectricChargingResponse {
  electric_charging_station: IAutobahnItem[];
}
