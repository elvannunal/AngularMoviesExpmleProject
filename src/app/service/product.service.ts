import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../product/product';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  
  product: product[];

  path = "http://localhost:3000/producks"

  constructor(private http: HttpClient) { }

  getProduct(categoryId: number):Observable<product[]> {

    let newPath=this.path;

    if(categoryId){
      newPath+="?categoryId="+categoryId
    }

    return this.http.get<product[]>(newPath);
}}
