// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Product } from '../module/product';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {
//   Base_Url  : string = environment.baseUrl;
//   Product_Url : string = `${this.Base_Url}/products`
//   constructor(private _http :HttpClient) { }

//   fetchAllProducts(): Observable<Product[]> {
//     return this._http.get<Product[]>(this.Product_Url);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../module/product'; // Ensure the path to Product interface is correct
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;
  private productUrl: string = `${this.baseUrl}/products`;

  constructor(private _http: HttpClient) {}

  // Fetch all products
  fetchAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.productUrl);
  }

  // Fetch products by category
  fetchProductsByCategory(category: string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.productUrl}/filter?category=${category}`);
  }

  // Fetch a single product by ID
  fetchProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.productUrl}/${id}`);
  }
}