import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  title = "Ürün Listesi"
  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute) { }

  product: product[];
  filterText:string = ""; 

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryId"]).subscribe(data=>{
        this.product=data
      })
    })
   
  }
}
