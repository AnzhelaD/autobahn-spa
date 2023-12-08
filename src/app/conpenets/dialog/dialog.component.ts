import {Component, EventEmitter, Output} from '@angular/core';
import { Store } from "@ngrx/store";
import {selectAutobahnItem, selectIsOpenDialog} from "../../store/autobahn.selectors";
import { closeDialog } from "../../store/autobahn.actions";
import { Observable } from "rxjs";
import {IAutobahnItem} from "../../IAutobahn";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

  @Output() closeDialogEvent: EventEmitter<void> = new EventEmitter<void>();

  public isOpenDialog$: Observable<boolean> = this.store.select(selectIsOpenDialog);
  public autobahnItem$: Observable<IAutobahnItem | null>  = this.store.select(selectAutobahnItem);

  constructor(private store: Store) {
  }

  onCancelClick(): void {
    this.store.dispatch(closeDialog());
    this.closeDialogEvent.emit();

  }

}
