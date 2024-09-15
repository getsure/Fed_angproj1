import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrl: './attr-directive.component.css'
})
export class AttrDirectiveComponent {
  isClassOneApply:boolean = false;
  isClassTwoApply:boolean = true;

  myColor:string = 'red';
  myFontSize:string = '25px'

}
