import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import {MatTabsModule} from "@angular/material/tabs";
import {DataTableModule} from "../data-table/app-data-table.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, MatTabsModule, DataTableModule, MatIconModule, MatButtonModule],
  exports: [DetailComponent],
})
export class DetailModule { }
