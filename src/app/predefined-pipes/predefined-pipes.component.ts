import { Component } from '@angular/core';

@Component({
  selector: 'app-predefined-pipes',
  templateUrl: './predefined-pipes.component.html',
  styleUrl: './predefined-pipes.component.css'
})
export class PredefinedPipesComponent {
  myname:string = "suresh kumar"
  myNumber:number = 6.45683645245245435
  myPercent:number = 0.5
  myPrice:number = 500
  myDate:Date = new Date()
  customer:object = {id:101, name:'chiranjeevi'}

}
