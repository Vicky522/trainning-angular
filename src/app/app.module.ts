import { Baitap2Module } from './baitap2/baitap2.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
// import { Baitap1Module } from './baitap1/baitap1.module';

@NgModule({
  // Nơi khai báo các component được quản lý bởi module
  // AppComponent đang được AppModule quản lý
  declarations: [AppComponent, DemoComponent],
  // Nơi khai báo các module duoc sữ dụng
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // để sử dụng các component của HomeModule trong AppModule cần phải gắn HomeModule vào trong imports
  // Những module do angular cung cấp sẵn: RouterModule, FormModule, HttpClientModule,...
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  Baitap1Module,
    Baitap2Module,
  ],

  // provider: nơi khai báo service cần sử dụng
  providers: [],

  // khai báo AppComponent là component khởi chạy đầu tiện của module
  // Các module khác do mình tự tạo sẽ ko có phần này
  bootstrap: [AppComponent],
})
export class AppModule {}
