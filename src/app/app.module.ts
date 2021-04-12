import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrowComponent } from './addrow/addrow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicallyComponent } from './dynamically/dynamically.component';
import { StoredataComponent } from './storedata/storedata.component';
import { AddremoveComponent } from './addremove/addremove.component';
import { AddRowStoredataComponent } from './add-row-storedata/add-row-storedata.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrowComponent,
    DynamicallyComponent,
    StoredataComponent,
    AddremoveComponent,
    AddRowStoredataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
