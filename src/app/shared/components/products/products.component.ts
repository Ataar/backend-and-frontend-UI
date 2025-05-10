
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../module/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category: string = '';
 loading = true; // Initially loading is true


  products: (Product & { currentImageIndex: number })[] = []; // Extend Product to include currentImageIndex

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private _location : Location

  ) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    if (this.category) {
      this.productService.fetchProductsByCategory(this.category).subscribe({
        next: (products) => {
          // Initialize currentImageIndex for each product
          this.products = products.map(product => ({
            ...product,
            currentImageIndex: 0 // Default to first image
          }));
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching products:', err);
          this.products = [];
          this.loading = false;
        }
      });
    }
    else
    {
      this.loading = false;
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

  goBack() {
    this._location.back();
    
  }


  // -----------------------------------------
  // goForward() {
  //   this._location.forward();
  // }
  
  showScrollTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button after scrolling down 300px
    this.showScrollTopBtn = window.pageYOffset > 300;
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  
  
}



