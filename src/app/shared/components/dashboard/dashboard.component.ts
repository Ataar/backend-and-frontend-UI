// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  categories = [
    { name: 'Books and Toys', image: 'assets/1.jpg', action: 'Grab Now' },
    { name: 'Electronics', image: 'assets/2.jpg', action: 'Grab Now' },
    { name: 'Fashion', image: 'assets/Zara.jpg', action: 'Shop Now!' },
    { name: 'Gaming', image: 'assets/angelic.webp', action: 'Shop Now!' },
    { name: 'Laptops', image: 'assets/laptop.jpg', action: 'Grab Now' },
    { name: 'Mobile Accessories', image: 'assets/mobile 02.webp', action: 'Shop Now!' },
    { name: 'Mobiles', image: 'assets/7.jpg', action: 'Grab Now' }
  ];
  

  constructor(private router: Router) {}

  navigateToProducts(category: string) {
    this.router.navigate(['/products', category]);
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.jpg'; // Ensure placeholder.jpg exists
    console.log('Image failed to load:', (event.target as HTMLImageElement).src);
  }

 
}