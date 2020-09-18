import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public count: string;
  constructor(private cartSer: CartService) {

    cartSer.getCartCount().subscribe(data => {
      this.count = data;
    });
  }

  ngOnInit(): void {
  }

}
