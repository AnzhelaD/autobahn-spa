import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MapModule } from '../map/map.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MapModule,
    CardModule
  ],
  exports: [DialogComponent]
})
export class DialogModule {}
