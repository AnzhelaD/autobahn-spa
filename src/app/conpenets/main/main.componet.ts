import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {getStarted} from "../../store/autobahn.actions";
import {selectLoading, selectRoads, selectStartApp} from "../../store/autobahn.selectors";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  public roads$ = this.store.select(selectRoads);
  public loading$  = this.store.select(selectLoading);

  public columns: string[] = ['name', 'view'];
  constructor(private store: Store) {}
  ngOnInit() {
   this.roads$.subscribe(res =>{
     console.log('res', res)
   })
  }
  viewDetails(id: string){

  }
}
