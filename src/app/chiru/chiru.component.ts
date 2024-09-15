import { Component } from '@angular/core';

@Component({
  selector: 'app-chiru',
  templateUrl: './chiru.component.html',
  styleUrl: './chiru.component.css'
})
export class ChiruComponent {
  name:string = 'chiranjeevi'
  salary:number = 30000
  designation:string = 'SE'
  profilePic:string = 'image path'
}
