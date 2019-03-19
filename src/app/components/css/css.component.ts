import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styleUrls: ['./css.component.sass']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
