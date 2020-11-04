import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { PromotionComponent } from './promotion/promotion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    PromotionComponent,
  ],
  imports: [BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
