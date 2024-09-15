import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent {
   name:string = 'suresh kumar'
   getEmployeeDetails(){
    console.log(`Calling method..${this.name}`)
   }
}
