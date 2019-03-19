import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alert:string = 'alert-success';
  // alertN:string = 'alert-danger';

  property:object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

}
