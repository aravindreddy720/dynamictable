import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRowStoredataComponent } from './add-row-storedata/add-row-storedata.component';
import { AddremoveComponent } from './addremove/addremove.component';
import { AddrowComponent } from './addrow/addrow.component';
import { DynamicallyComponent } from './dynamically/dynamically.component';
import { StoredataComponent } from './storedata/storedata.component';

const routes: Routes = [
  {path: "addrow", component: AddrowComponent},
  {path: "addrowstoredata", component: AddRowStoredataComponent},
  {path: "dynamically", component: DynamicallyComponent},
  {path: "storedata", component: StoredataComponent},
  {path: "addremove", component: AddremoveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
