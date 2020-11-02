import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //khai báo chặt chẽ hơn thì thêm :kiểu giá trị vào trong khai báo biến
  totalItems: number = 50 ;

}
