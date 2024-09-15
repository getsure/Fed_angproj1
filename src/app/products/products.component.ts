import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsList:any = []
    constructor(private prodService: ProductsService){}
    ngOnInit(){
      this.prodService.getProducts().subscribe(res => this.productsList = res                                    )
    }
}

