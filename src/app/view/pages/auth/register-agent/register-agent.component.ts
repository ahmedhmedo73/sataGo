import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vex-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.scss']
})
export class RegisterAgentComponent implements OnInit {



  formAgent : FormGroup
  constructor( private fb:FormBuilder) { 
    this.formAgent = this.fb.group({
      region:['' , Validators.required],
      governate:['' , Validators.required],
      numBranch:['' , Validators.required],
      nameAgent:['' , Validators.required],
      address:['' , Validators.required],
      numPhone1:['' , Validators.required],
      numPhone2:['' , Validators.required],
      firstName:['' , Validators.required],
      secondName:['' , Validators.required],
      job:['' , Validators.required],
      weSite:['' , Validators.required],
      location:['' , Validators.required],
      email:['' , [Validators.required , Validators.email]],
      numCars:['' , Validators.required]
    })
  }
  
  
  

  ngOnInit(): void {


    

  }

  test(){
    console.log(this.formAgent.value.nameAgent)
  }

  displayForm(){
    alert("hello")
  }

}
