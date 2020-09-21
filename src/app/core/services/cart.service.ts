import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartProducts: BehaviorSubject<any[]> = new BehaviorSubject([]);
  // dataList: Observable<number> = this._cartCount.asObservable();

  constructor() { }
  addCart(product: Product) {
    const currentValue = this._cartProducts.value;
    const updatedValue = [...currentValue, product];
    this._cartProducts.next(updatedValue);
  }

  removeCart(product: Product) {
    var index = this._cartProducts.value.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      this._cartProducts.value.splice(index, 1);
    }
    this._cartProducts.next(this._cartProducts.value);

  }

  getCartCount(): BehaviorSubject<any[]> {
    return this._cartProducts;
  }
}
