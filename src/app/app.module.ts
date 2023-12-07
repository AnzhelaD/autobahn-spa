import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./conpenets/header/header.module";
import {FooterModule} from "./conpenets/footer/footer.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {AutobahnReducer} from "./store/autobahn.reducer";
import {MainModule} from "./conpenets/main/main.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {AutobahnEffects} from "./store/autobahn.effects";
import {HttpClientModule} from "@angular/common/http";
import {DetailModule} from "./conpenets/detail/detail.module";
import {RoadListModule} from "./conpenets/roadList/road-list.module";
import {DataTableModule} from "./conpenets/data-table/app-data-table.module";
import {CardModule} from "./conpenets/card/card.module";
import {MapModule} from "./conpenets/map/map.module";
import {DialogModule} from "./conpenets/dialog/dialog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule,
        BrowserAnimationsModule,
        MainModule,
        RoadListModule,
        HttpClientModule,
        DetailModule,
        DataTableModule,
        CardModule,
        MapModule,
        DialogModule,
        StoreModule.forRoot({ road: AutobahnReducer }),
        StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: true,
        }),
        EffectsModule.forRoot([AutobahnEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
