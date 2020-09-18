import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/Category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];
  constructor(private http: HttpClient,
    private route: Router,
    private categoryService: CategoriesService) {

    this.categoryService.getCategories().subscribe(data => {
      //console.log(data[0].name);
      this.categories = data
    });

  }

  ngOnInit(): void {


  }


  onSelect(category) {
    // console.log('onSelect'+category.id);
    this.route.navigate(['/product', category.id, category.name]);
  }

}
