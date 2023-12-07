import {Component, Input, OnInit} from '@angular/core';
import {AutobahnService} from "../../service/autobahn.service";
import {setData, setDynamicId} from "../../store/autobahn.actions";
import {Store} from "@ngrx/store";
import {selectData, selectDynamicId} from "../../store/autobahn.selectors";
import {IAutobahnItem, IData} from "../../IAutobahn";
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-table',
  templateUrl: 'app-data-table.component.html',
  styleUrls: ['./app-data-table.component.scss']
})

export class DataTableComponent implements OnInit{
  @Input() dataType: string = '';
  public data$: Observable<IData[] | []> = this.store.select(selectData);
  public dynamicId$: Observable<string | null> =  this.store.select(selectDynamicId);
  columns: string[] = ['title', 'subtitle', 'identifier','description','view'];

  constructor(private autobahnService: AutobahnService, private store: Store) {}

  ngOnInit(): void {
    this.dynamicId$.subscribe(res =>{
      console.log('is', res);
    })
  }


  viewOnMap(item: IAutobahnItem): void {
    console.log('View details for:', item);
  }
}
