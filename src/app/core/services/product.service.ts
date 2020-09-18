import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProductsByCategory(categoryId:string): Observable<Product[]> {

    return this.http.get<Product[]>('https://ng-demohttp.firebaseio.com/'+categoryId+'.json');    
  }
}
