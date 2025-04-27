

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../module/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category: string = '';
  products: (Product & { currentImageIndex: number })[] = []; // Extend Product to include currentImageIndex

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    if (this.category) {
      this.productService.fetchProductsByCategory(this.category).subscribe({
        next: (products) => {
         
          this.products = products.map(product => ({
            ...product,
            currentImageIndex: 0 
          }));
        },
        error: (err) => {
          console.error('Error fetching products:', err);
          this.products = [];
        }
      });
    }
  }

  // On mouse enter, show the second image (index 1)
  onImageHover(product: Product & { currentImageIndex: number }) {
    if (product.images && product.images.length > 1) {
      product.currentImageIndex = 1;
    }
  }

  // On mouse leave, revert to the first image (index 0)
  onImageLeave(product: Product & { currentImageIndex: number }) {
    product.currentImageIndex = 0;
  }

  navigateToProduct(id: string) {
    this.router.navigate(['/product', id]);
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.jpg';
  }
}



