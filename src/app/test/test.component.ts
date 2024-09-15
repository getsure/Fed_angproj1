import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public myname:string = 'uday chiru';
  public mynumber:number = 12346.5676873;
  public mynumber2:number = 0.5;  
  public myprice:number = 500.34;
  public mydate:Date = new Date();
  public mydate2:Date =new Date(1983, 3, 13);
  person:object = {'name':'suresh', 'age':'33'}

}
