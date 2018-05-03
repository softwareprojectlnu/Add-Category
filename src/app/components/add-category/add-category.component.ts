import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  Category: category = {
    title:''
  }

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.Category.title != ''){
      this.categoryService.addItem(this.Category);
      this.Category.title = '';
    }
  }

}
