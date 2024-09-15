import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  submitFormData(data:any){
    console.log(data)
    //.post('restful api', data)
  }
}
