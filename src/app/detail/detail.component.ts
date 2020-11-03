import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'product 1',
      desciption: 'desciption 1',
      image: 'https://via.placeholder.com/200x150',
      price: 200000,
      quantity: 5,
    },
    {
      id: '2',
      name: 'product 2',
      desciption: 'desciption 2',
      image: 'https://via.placeholder.com/200x150',
      price: 500000,
      quantity: 100,
    },
  ];

  removeProduct(productId: string) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (
      index !== -1 &&
      confirm('Bạn có chắc chắn muốn xóa item: ' + productId)
    ) {
      this.products.splice(index);
    }
  }
}
