import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px] = "size">
    Hola! Esto es una prueba...
  </p>

  <button class="btn btn-primary" (click)="size = size - 5">
    <i class="fa fa-minus"></i>
  </button>
  <button class="btn btn-primary ml-2" (click)="size = size + 5">
    <i class="fa fa-plus"></i>
  </button>
  
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
