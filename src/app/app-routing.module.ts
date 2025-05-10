// import {NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
// import { ProductsComponent } from './shared/components/products/products.component';


// // baseUrl = http://localhost:4200   >> current URL or Rout URL

// const routes: Routes = [      // the configration of routing is an array
 
//   {
//   path:'home',
//   component: DashboardComponent
//  },
//  {
//   path:'',
//   redirectTo:'home',
//   pathMatch:'full'
//  },

//  {
//   path:'products',
//   component:ProductsComponent
//  }
 
// ];  
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 

  

// }




// // // Notes:-

// // // 1 -  whatever we are creating routing like app routing file in that several things are added
// // // like an array  , created configration , Which components have which path. these all for 
// // // app.module.ts which is also a root module

// // // 2 - curent URL ko padh ke konse component ko render karna hai , konse nahi karna hai matlab
// // // distroye karna hai ye sab kuch <router-outlet> karta hai jo app component me hota hai aur isi tarah se ye 
// // // single application ban gaya kyoun ki hamare jo bhi components hain wo app component me rener ho 
// // // rahe hain aur app component hi hai jo seedha index.html me jata hai aur ye index.html seedha 
// // // browser pe jata hai o ki ek he file hai isliye hum isko single page application kahte hain. 

// // // 3 - jab hum form ko add mode me use karna chahte hain to hum 

// // // {
// // //   path: "products/addProduct", //  http://localhost:4200/products/addProduct',
// // //   component:ProductFormComponent
// // // },   

// // // iska Route ka use karenge


// // //  4 - jab hum okisi oject ko edit karna chahte hain to
// // // {
// // //   path: "products/:pid/edit", //  http://localhost:4200/products/123/edit',
// // //   component:ProductFormComponent
// // // } 

// // // is rout ka use karenge


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
    path: 'products/:category', // Updated to support dynamic category
    component: ProductsComponent
  },
  {
    path: 'product/:id', // Added route for SingleProductComponent
    component: SingleProductComponent
  },

 
  
  // {
  //   path: '**', // Fallback for unknown routes
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
