import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pamount:number = 100
  parentUpdatedStatus(updatedAmt:any){
    this.pamount = updatedAmt
  }
}
