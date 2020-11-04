import { Product } from './../product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent {
  @Input() products: Product[];

  getTotalSummary() {
    let subTotal = 0;
    for (let i = 0; i < this.products.length; i++) {
      subTotal += this.products[i].price * this.products[i].quantity;
    }
    return subTotal;
  }
}
