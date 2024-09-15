import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  private data:string[] = []
  private dataSource = new BehaviorSubject<any>(this.data)
  dataObs$ = this.dataSource.asObservable()


  getDataFromComps(compsData:any){
    console.log(compsData)
    this.dataSource.next(compsData)
  }
}
