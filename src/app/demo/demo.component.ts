import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  // template: `<div>
  //   <p>hello demo</p>
  // </div>`,
  styleUrls: ['./demo.component.css'],
  // styles: [
  //   `
  //     .title {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
