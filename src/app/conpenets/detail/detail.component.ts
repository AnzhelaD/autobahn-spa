import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {
  loadClosure,
  loadElectricCharging,
  loadParkingLorry,
  loadRoadworks, loadWarning,
  loadWebCams,
  setDynamicId, setSelectedTab
} from "../../store/autobahn.actions";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {selectDynamicId, selectLoading, selectSelectedTab} from "../../store/autobahn.selectors";
import {MatDialog} from "@angular/material/dialog";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  public dynamicId: string = '';
  public loading$ = this.store.select(selectLoading);


  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(setDynamicId({ dynamicId: params['id'] }));
      this.dynamicId = params['id'];
    });
    this.tabChanged(0);
  }

  goBack(){
    this.router.navigate(['/']);
  }

  tabChanged(index: number = 0): void {
    let dataType: string;

    switch (index) {
      case 0:
        dataType = 'roadworks';
        this.store.dispatch(loadRoadworks({ id: this.dynamicId }));
        break;
      case 1:
        dataType = 'webCams';
        this.store.dispatch(loadWebCams({ id: this.dynamicId }));
        break;
      case 2:
        dataType = 'parkingLorry';
        this.store.dispatch(loadParkingLorry({ id: this.dynamicId }));
        break;
      case 3:
        dataType = 'electricCharging';
        this.store.dispatch(loadElectricCharging({ id: this.dynamicId }));
        break;
      case 4:
        dataType = 'closure';
        this.store.dispatch(loadClosure({ id: this.dynamicId }));
        break;
      case 5:
        dataType = 'warning';
        this.store.dispatch(loadWarning({ id: this.dynamicId }));
        break;
      default:
        dataType = 'roadworks';
        this.store.dispatch(loadRoadworks({ id: this.dynamicId }));
    }

    console.log('Selected tab dataType:', dataType);
  }
}
