import { Product } from './../product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input()
  products: Product[];

  getTotalItems() {
    let totalItems: number;
    for (let i = 0; i < this.products.length; i++) {
      const item = this.products[i];
      totalItems += item.quantity;
    }
    return totalItems;
  }
}
