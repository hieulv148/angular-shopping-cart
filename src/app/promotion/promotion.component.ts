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
    console.log('this.products', this.products);
    let subTotal: number;
    for (let i = 0; i < this.products.length; i++) {
      // const item = this.products[i];
      subTotal += this.products[i].price * this.products[i].quantity;
    }
    console.log('subTotal', subTotal);
    return subTotal;
  }
}
