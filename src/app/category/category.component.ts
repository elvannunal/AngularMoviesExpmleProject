import { Component, OnInit } from '@angular/core';
import { categoryService } from '../service/category.service';
import { category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[categoryService]
})
export class categoryComponent implements OnInit {
  title = "Filmler"
  constructor(private categoryService:categoryService) { }

  category: category[];
  filterText = ""; 

  ngOnInit() {
    this.categoryService.getcategory().subscribe(data=>{
      this.category=data
    })
  }
}
