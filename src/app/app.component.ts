import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //tên component sẽ nhúng vào html

  // khai báo file html của component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
}
