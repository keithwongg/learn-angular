import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from './busstop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BusTimingsService {
  busStopServices!: Observable<Services[]>;

  constructor(private http: HttpClient) { }

  getTimings() {
    let stopNumber = "14141"
    return this.http.get(`https://arrivelah2.busrouter.sg/?id=${stopNumber}`);
  }
}
