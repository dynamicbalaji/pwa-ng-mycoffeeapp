import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';

const routes: Routes = [
  { path:'', component: ListComponent },
  { path:'coffee', component: CoffeeComponent },
  { path:'coffee/:id', component: CoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
