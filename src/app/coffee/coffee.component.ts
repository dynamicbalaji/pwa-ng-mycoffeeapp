import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  coffee: Coffee;
  types: string[] = ['Espresso', 'Cappuccino', 'Ristretto', 'Americano', 'Frappe'];

  constructor(private _route: ActivatedRoute,
              private _geolocation: GeolocationService) { }

  routingSubscription: any;

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = 
          this._route.params.subscribe((params) => {
            console.log(params['id']);
          });
    this._geolocation.requestLocation(location => {
      this.coffee.location.latitude = location.latitude;
      this.coffee.location.longitude = location.longitude;
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
