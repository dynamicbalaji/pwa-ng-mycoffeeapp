import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.routingSubscription = 
          this._route.params.subscribe((params) => {
            console.log(params['id']);
          });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
