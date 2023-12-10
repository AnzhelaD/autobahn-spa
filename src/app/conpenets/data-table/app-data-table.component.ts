import { Component, Input, OnInit } from '@angular/core';
import { openDialog, setAutobahnItem } from '../../store/autobahn.actions';
import { Store } from '@ngrx/store';
import { selectData, selectIsOpenDialog } from '../../store/autobahn.selectors';
import { IAutobahnItem, IData } from '../../IAutobahn';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-data-table',
  templateUrl: 'app-data-table.component.html',
  styleUrls: ['./app-data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public data$: Observable<IData[] | []> = this.store.select(selectData);
  public isOpenDialog$: Observable<boolean> =
    this.store.select(selectIsOpenDialog);
  columns: string[] = [
    'title',
    'subtitle',
    'identifier',
    'description',
    'view'
  ];

  constructor(
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isOpenDialog$.subscribe((isOpen) => {
      if (!isOpen) {
        this.dialog.closeAll();
      }
    });
  }

  viewOnMap(item: IAutobahnItem): void {
    this.store.dispatch(
      setAutobahnItem({ autobahnItem: item as IAutobahnItem })
    );
    this.store.dispatch(openDialog());
    this.dialog.open(DialogComponent, {
      minWidth: '1000px',
      disableClose: true
    });
  }
}
