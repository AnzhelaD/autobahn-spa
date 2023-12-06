import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {IRoads} from "../IRoads";

@Injectable({
  providedIn: 'root',
})
export class AutobahnService {
  private apiUrl = 'https://verkehr.autobahn.de/o/autobahn';

  constructor(private http: HttpClient) {}

  getRoads(): Observable<IRoads> {
    const endpoint = `${this.apiUrl}/`;
    return this.http.get<any>(endpoint);
  }
  getRoadworks(id: string): Observable<any>{
    const endpoint = `${this.apiUrl}/${id}/services/roadworks`;
    return this.http.get<any>(endpoint);
  }
}
