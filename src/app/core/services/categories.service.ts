import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from '../models/Category';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories = [];
  constructor(private http: HttpClient) { }

//   getCategories() {
//     this.http.get('https://ng-demohttp.firebaseio.com/categories.json')
//       .pipe(map(data => {
//         const postArray = [];
//         for (const key in data) {
//           if (data.hasOwnProperty(key)) {
//             postArray.push({ ...data[key], id: key })
//             this.categories.push({ ...data[key], id: key })

//           }
//         }
//         return this.categories;
//       })
//       )
//       .subscribe(resData => {
//         //console.log(resData);
//       });
//         console.log(this.categories);
//         console.log(this.categories.slice());
//     return this.categories;
//   }
getCategories(): Observable<Category[]> {

  return this.http.get<Category[]>('https://ng-demohttp.firebaseio.com/categories.json');


  // return this.http.get('https://ng-demohttp.firebaseio.com/categories.json')
  // .map((res: Response) => res.json().response.map((user: Product) => new Product().deserialize(user)));

}
}

