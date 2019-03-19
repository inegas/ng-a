import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alert:string = 'alert-success';
  // alertN:string = 'alert-danger';
  loading:boolean = false;

  property:object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 3000);
  }

}
