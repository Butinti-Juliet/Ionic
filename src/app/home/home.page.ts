import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:string;
  surname:string;
  age:number;
  gender:string;


  constructor(private route: Router) {}

  nextPage(){
    this.route.navigateByUrl('/tabs/details')
  }
  noPrint()
  {
    console.log(this.name)
    console.log(this.surname)
    console.log(this.age)
    console.log(this.gender)
  }

}
