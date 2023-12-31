import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DataTableComponent } from './app-data-table.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, DialogModule],
  exports: [DataTableComponent]
})
export class DataTableModule {}
