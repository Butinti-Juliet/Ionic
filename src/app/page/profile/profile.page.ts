import { Component, OnInit } from '@angular/core';
import { PERSON_LIST } from 'src/app/mocks/person.mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // cat = true;

  cat = false;

 personList = PERSON_LIST;

  constructor() { }

  ngOnInit() {
  }

}
