import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrl: './struct-dir.component.css'
})
export class StructDirComponent {
   isProductAvailable:boolean = false;
   names:string[] = ['chiru','vihaan','varshini']
   products = [
    {productId:101, productName:'samsung tv', productPrice:20000},
    {productId:102, productName:'LG tv', productPrice:30000},
    {productId:103, productName:'Oneplus tv', productPrice:10000}
   ]
}

