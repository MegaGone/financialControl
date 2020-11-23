import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required, Validators.maxLength(50)])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    alert('Your message was launched successful');
    form.reset();
  }
}
