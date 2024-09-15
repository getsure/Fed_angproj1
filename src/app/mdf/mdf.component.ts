import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css'
})
export class MdfComponent {
  userForm!:any;
  constructor(private formBuilder:FormBuilder){
    this.userForm  = this.formBuilder.group({
      userName:['',[Validators.required] ],
      email: ['', [Validators.required]],
      address: this.formBuilder.group({
        city:['',[Validators.required]]
      })
    })
  }

  sendData(){
    console.log(this.userForm.value)
    //httpClient.post(restful APP_ID, this.userForm.value)
  }
  
}
