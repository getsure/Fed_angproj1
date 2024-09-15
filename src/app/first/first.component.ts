import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  data!:any
  newData:any[] = [];
   constructor(private dataSrvc:DataService){}
   ngOnInit(): void {
       this.dataSrvc.dataObs$.subscribe(res => this.data = res)
   }
   sendDataFromFirstComp(){  
    this.data.push('suresh')  
    this.newData = [...this.data]
    this.dataSrvc.getDataFromComps(this.newData)
   }
}

