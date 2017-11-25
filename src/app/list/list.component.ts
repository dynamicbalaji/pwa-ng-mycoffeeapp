import { Component, OnInit } from '@angular/core';

import { Coffee } from '../logic/Coffee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: [Coffee];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getList(list => {
      this.list = list;
    });
  }

}
