import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() camount:number=0;

   @Output() chiruEvent: EventEmitter<number>= new EventEmitter<number>()

  shoppingAmt(){
    this.camount--
    this.chiruEvent.emit(this.camount)
  }
  investmentAmt(){
    this.camount++
    this.chiruEvent.emit(this.camount)
  }
}
