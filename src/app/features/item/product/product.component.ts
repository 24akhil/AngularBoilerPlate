import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/models/Category';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public category = new Category;
  public products: Product[];

  constructor(private route: ActivatedRoute,
    private prdService: ProductService,
    private cartSer: CartService) {

    route.params.subscribe(val => {
      this.category.id = val.id;
      this.category.name = val.name;
      this.getProducts(this.category);

    });

  }

  ngOnInit(): void {

  }

  getProducts(selCategory: Category) {
    //var category;
    this.prdService.getProductsByCategory(selCategory.id)
      .subscribe(data => {
        //console.log("HTTP Data " + data[0].name);
        this.products = [...data];
      });
    //this.cartSer.updateCart( this.products.find(val=>val.id=2));

  }

}
