import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  makeCapitalPopup(data: any): string {
    return `` +
    `<div>Facilitytype: ${ data.facilitytype }</div>` +
    `<div>Address: ${ data.address }</div>` +
    `<div>Description: ${ data.locationdescription }</div>` +
    `<div>facilitytype: ${ data.facilitytype }</div>` +
    `<div>Fooditems: ${ data.fooditems }</div>`
  }

}
