import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadListComponent } from './road-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RoadListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [RoadListComponent]
})
export class RoadListModule {}
