import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterprice'
})
export class MytitlecasePipe implements PipeTransform {

  transform(products: any[], minPrice: number): any[] {
    console.log(products)
    console.log(minPrice)
    return products.filter(product => product.productPrice > minPrice);
  }
}
