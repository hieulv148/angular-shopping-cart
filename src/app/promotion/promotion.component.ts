import { Product } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent {
  @Input() subTotal: number;
  @Output() onCheckPromotion = new EventEmitter();

  checkPromotion(promoCode){
    this.onCheckPromotion.emit(promoCode);
  }
}
