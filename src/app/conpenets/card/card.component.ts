import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAutobahnItem } from '../../store/autobahn.selectors';
import { Observable } from 'rxjs';
import { IAutobahnItem } from '../../IAutobahn';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent {
  public autobahnItem$: Observable<IAutobahnItem | null> =
    this.store.select(selectAutobahnItem);
  constructor(private store: Store) {}
}
