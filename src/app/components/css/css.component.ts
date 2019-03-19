import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class = "mt-2">
      css works!
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 20px;
    }
  `],
  styleUrls: ['./css.component.sass']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
