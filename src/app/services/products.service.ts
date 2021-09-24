import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root',
})

/**
 * Product Service that handles endpoint calls to retrieve products.
 */
export class ProductsService {
  productItem!: ProductItem;

  productItemsList!: ProductItem[];

  constructor(private http: HttpClient) {}

  /**
   * Fetches JSON of Product info
   * @returns An observable for the ProductList to go through and convert to a ProductItem[]
   */
  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('../assets/data.json');
  }

  /**
   * Stores the products in a list for the other components to retrieve.
   * @param productItemsList - List of products
   */
  setProducts(productItemsList: ProductItem[]) {
    this.productItemsList = productItemsList;
  }

  // This would be implemented to call the API for a single object.
  // Would be used in product-item-detail.component
  getSingleProduct() {}
}
