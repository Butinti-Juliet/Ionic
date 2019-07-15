import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  info: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.info = this.fb.group({

      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [0, Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

submit({value, valid}: {value:person, valid:boolean})
 {
  console.log(value.name);
  console.log(value.surname);
  console.log(value.age);
  console.log(value.gender);
  console.log(valid)
 }
}
