import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Coffee } from "./logic/Coffee";
import { PlaceLocation } from "./logic/PlaceLocation";

@Injectable()
export class DataService {

  endpoint: string = "http://localhost:3000";

  constructor(private _http: Http) { }

  getList(callback) {
    /* let list = [
      new Coffee("Double Espresso", "Sunny Cafe",  new PlaceLocation("123 Market St", "San Francisco")),
      new Coffee("Caramel Americano", "Starcoffee",  new PlaceLocation("Gran Via 34", "Madrid"))
    ];

    callback(list); */
    this._http.get(`${this.endpoint}/coffees`).subscribe(response => {
      callback(response.json());
    });
  }
  
  save(coffee, callback) {
    /* callback(true); */
    // _id is a property created by nedb for us. If its there, then its an update
    if(coffee._id){
      // Update
      this._http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee).subscribe(response => {
        callback(true);
      });
    } else {
      // Insert
      this._http.post(`${this.endpoint}/coffees`, coffee).subscribe(response => {
        callback(true);
      });
    }
  }

}
