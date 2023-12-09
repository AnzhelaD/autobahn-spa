import {
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs';
import { IAutobahnItem, MapMarkerConfig } from '../../IAutobahn';
import { selectAutobahnItem } from '../../store/autobahn.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() lat: number = 22.2736308;
  @Input() lng: number = 70.7512555;

  public autobahnItem$: Observable<IAutobahnItem | null> =
    this.store.select(selectAutobahnItem);
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  markers: MapMarkerConfig[] = [];

  zoom = 8;
  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lat'] || changes['lng']) {
      this.zone.run(() => {
        this.center = { lat: this.lat, lng: this.lng };
        this.markers = [
          {
            position: { lat: this.lat, lng: this.lng },
            label: 'A',
            title: 'Marker A',
            options: { draggable: true }
          }
        ];
        this.cdr.detectChanges();
      });
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
