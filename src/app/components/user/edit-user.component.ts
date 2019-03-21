import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: []
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(params =>{
      console.log('edit user:', params);
      
    })
   }

  ngOnInit() {
  }

}
