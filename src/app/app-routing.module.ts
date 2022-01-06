import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customer", component: CustomerComponent,
    children: [{
      path: "", component: ListingComponent
    },
    { path: "create", component: AddnewComponent },
    { path: "Edit/:id", component: AddnewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
