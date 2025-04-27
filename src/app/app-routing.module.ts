
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products/:category',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: SingleProductComponent
  },
  {
    path: '**', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}