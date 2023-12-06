import {Component, OnInit} from '@angular/core';
import {selectLoading, selectRoads} from "../../store/autobahn.selectors";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-road-list',
  templateUrl: './road-list.component.html',
  styleUrls: ['./road-list.component.scss']
})
export class RoadListComponent implements OnInit{
  public roads$ = this.store.select(selectRoads);
  public loading$  = this.store.select(selectLoading);
  public columns: string[] = ['name', 'view'];
  constructor(private store: Store, private router: Router) {}
  ngOnInit() {
    this.roads$.subscribe(res =>{
      console.log('res', res)
    })
  }
  viewDetails(id: string){
    this.router.navigate(['/detail', id]);
  }
}
