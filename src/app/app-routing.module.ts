import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductList } from './product/product-list.component';
import { ProductDetailsComponent } from './product/product-details.component';

const routes: Routes = [
  { path : 'home', component : WelcomeComponent},
  { path : 'products', component : ProductList},
  { path : 'products_details/:id', component : ProductDetailsComponent},
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : '**', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
