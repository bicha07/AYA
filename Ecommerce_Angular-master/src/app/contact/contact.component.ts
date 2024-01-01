import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /*

  user! : User;
  reactiveForm! : FormGroup;*/

  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faLocationArrow =faLocationArrow;
  addContactForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
        
      ]),

     
      email: new FormControl('',[
        Validators.required,
        Validators.email,
       
      ]),

   
     
      objet: new FormControl('',[
        Validators.required,
        
      ]),

      msg: new FormControl('',[
        Validators.required,
       
      ]),
    }

     
    this.addContactForm = this.fb.group(formControls)
  }
  get nom() {
    return this.addContactForm.get('nom');
  }
 
  get email() {
    return this.addContactForm.get('email');
  }
 

  get objet() {
    return this.addContactForm.get('objet');
  }

  get msg() {
    return this.addContactForm.get('msg');
  }

  


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}