import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  data!:any
  constructor(private dataSrvc:DataService){}
  ngOnInit(): void {
      this.dataSrvc.dataObs$.subscribe(res => this.data = res)
  }
}
