import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'vex-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.scss']
})
export class RegisterDriverComponent implements OnInit {

  formDriver : FormGroup
  constructor( private fb:FormBuilder) { 
    this.formDriver = this.fb.group({
      firstName:['' , Validators.required],
      secondName:['' , Validators.required],
      residence:['' , Validators.required],
      email:['' , [Validators.required , Validators.email]],
      numPhone1:['' , Validators.required],
      numPhone2:['' , Validators.required],
      covernate:['' , Validators.required],
      region:['' , Validators.required],
      address:['' , Validators.required],
      degree:['' , Validators.required],
      carType:['' , Validators.required],
      carName:['' , Validators.required],
      carCategory:['' , Validators.required],
      model:['' , Validators.required]
    })
    
  }

  

  ngOnInit(): void {
  }

  

}
