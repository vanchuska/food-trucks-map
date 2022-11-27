import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  baseUrl: string = 'https://thawing-meadow-03948.herokuapp.com/trucks';

  constructor(private http: HttpClient, private popupService: PopupService) {}

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      console.log(res.data.trucks.features[0]);
      for (const c of res.data.trucks.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]).addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      for (const c of res.data.trucks.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        // const circle = L.circleMarker([lat, lon]).addTo(map);
        const circle = L.circleMarker([lat, lon], {
          radius: 5,
          color: 'Red',
        }).addTo(map);
        circle.bindPopup(this.popupService.makeCapitalPopup(c.properties));
      }
    });
  }
}
