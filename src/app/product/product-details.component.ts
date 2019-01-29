import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetailTitle = 'Product Details';
  product : IProduct | undefined;
  constructor() { }

  ngOnInit() {
  }

}
