import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from "./conpenets/detail/detail.component";
import {RoadListComponent} from "./conpenets/roadList/road-list.component";

const routes: Routes = [
  { path: '', component: RoadListComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
