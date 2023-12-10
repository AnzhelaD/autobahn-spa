import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  IAutobahn,
  IAutobahnClosureResponse,
  IAutobahnElectricChargingResponse,
  IAutobahnParkingLorryResponse,
  IAutobahnRoadworksResponse,
  IAutobahnWarningResponse,
  IAutobahnWebCamsResponse
} from '../IAutobahn';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutobahnService {
  private apiUrl = environment.autobahnApiUrl;

  constructor(private http: HttpClient) {}

  getRoads(): Observable<IAutobahn> {
    const endpoint = `${this.apiUrl}/`;
    return this.http.get<any>(endpoint);
  }
  getRoadworks(id: string): Observable<IAutobahnRoadworksResponse> {
    const endpoint = `${this.apiUrl}/${id}/services/roadworks`;
    return this.http.get<any>(endpoint);
  }

  getWebCams(id: string): Observable<IAutobahnWebCamsResponse> {
    const endpoint = `${this.apiUrl}/${id}/services/webcam`;
    return this.http.get<any>(endpoint);
  }

  getWarning(id: string): Observable<IAutobahnWarningResponse> {
    const endpoint = `${this.apiUrl}/${id}/services/warning`;
    return this.http.get<any>(endpoint);
  }

  getClosure(id: string): Observable<IAutobahnClosureResponse> {
    const endpoint = `${this.apiUrl}/${id}/services/closure`;
    return this.http.get<any>(endpoint);
  }

  getParkingLorry(id: string): Observable<IAutobahnParkingLorryResponse> {
    const endpoint = `${this.apiUrl}/${id}/services/parking_lorry`;
    return this.http.get<any>(endpoint);
  }
  getElectricCharging(
    id: string
  ): Observable<IAutobahnElectricChargingResponse | any> {
    const endpoint = `${this.apiUrl}/${id}/services/electric_charging_station"`;
    return this.http.get<any>(endpoint);
  }
}
