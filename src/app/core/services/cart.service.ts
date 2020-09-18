import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartCount: BehaviorSubject<string> = new BehaviorSubject('0');
  // dataList: Observable<number> = this._cartCount.asObservable();

  constructor() { }
  updateCart(num: string) {
    this._cartCount.next(num);
  }

  getCartCount(): BehaviorSubject<string> {
    return this._cartCount;
  }
}
