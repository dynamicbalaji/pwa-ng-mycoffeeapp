import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Coffee } from "./logic/Coffee";
import { PlaceLocation } from "./logic/PlaceLocation";

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getList(callback) {
    // TODO: Change it with a real Web Service
    let list = [
      new Coffee("Double Espresso", "Sunny Cafe",  new PlaceLocation("123 Market St", "San Francisco")),
      new Coffee("Caramel Americano", "Starcoffee",  new PlaceLocation("Gran Via 34", "Madrid"))
    ];

    callback(list);
  }

  save(callback) {
    // TODO: Change it with a real Web Service
    callback(true);
  }

}
