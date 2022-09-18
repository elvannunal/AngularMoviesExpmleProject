import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { category } from '../category/category';


@Injectable()
export class categoryService {
  
  category: category[];

  path ="http://localhost:3000/category"

  constructor(private http: HttpClient) { }

  getcategory():Observable<category[]> {

    return this.http.get<category[]>(this.path);
}}
