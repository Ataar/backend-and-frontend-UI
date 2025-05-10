import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../module/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product: Product | null = null;
  mainImage: string = '';
  errorMessage: string = '';
  quantity: number = 0; // For quantity selector
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location

  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Fetching product with ID:', id);
    if (id) {
      this.productService.fetchProductById(id).subscribe({
        next: (product) => {
          console.log('Product received:', product);
          this.product = product;
          this.mainImage = product.images && product.images.length ? product.images[0] : 'assets/placeholder.jpg';
        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.product = null;
          this.errorMessage = 'Unable to load product details. Please try again later.';
        }
      });
    }
  }

  // goBack() {
  //   const category = this.product?.category || '';
  //   if (!category) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.router.navigate(['/products', category]);
  //   }
  // }
  goBack() {
    this.location.back();
  }
  


  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.jpg';
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.quantity > 0 && this.product) {
      console.log(`Added ${this.quantity} of ${this.product.title} to cart`);
      // Implement cart logic here (e.g., store in localStorage or a cart service)
    } else {
      alert('Please select a quantity greater than 0');
    }
  }

  buyNow() {
    if (this.quantity > 0 && this.product) {
      console.log(`Proceeding to buy ${this.quantity} of ${this.product.title}`);
      // Implement buy now logic here (e.g., navigate to checkout page)
    } else {
      alert('Please select a quantity greater than 0');
    }
  }

  // getStars(): { filled: boolean; half?: boolean }[] {
  //   if (!this.product) return [];
  //   const fullStars = Math.floor(this.product.rating);
  //   const hasHalfStar = this.product.rating % 1 >= 0.25 && this.product.rating % 1 < 0.75; // Threshold for half star
  //   const stars = [];
  //   for (let i = 0; i < 5; i++) {
  //     if (i < fullStars) {
  //       stars.push({ filled: true });
  //     } else if (i === fullStars && hasHalfStar) {
  //       stars.push({ filled: true, half: true }); // Half star
  //     } else {
  //       stars.push({ filled: false });
  //     }
  //   }
  //   return stars;
  // }


  getStars(): { filled: boolean; half: boolean }[] {
    const stars: { filled: boolean; half: boolean }[] = [];
    const rating = this.product?.rating ?? 0;
  
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push({ filled: true, half: false }); // full star
      } else if (rating >= i - 0.5) {
        stars.push({ filled: false, half: true }); // half star
      } else {
        stars.push({ filled: false, half: false }); // empty star
      }
    }
  
    return stars;
  }
  
}