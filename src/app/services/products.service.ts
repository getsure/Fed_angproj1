import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient){}

  private url:string = "products.json"

    getProducts():Observable<IProduct[]>{
       return this.httpClient.get<IProduct[]>(this.url)
      
    }  
}
