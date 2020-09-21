import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartServ: CartService) { }

  ngOnInit(): void {
    //  console.log(this.product.id);
  }

  addCart() {
    //console.log("added" + this.product.name);
    this.cartServ.addCart(this.product);
  }

  removeCart() {
    //console.log("remove" + this.product.name);
    this.cartServ.removeCart(this.product);
  }

}
