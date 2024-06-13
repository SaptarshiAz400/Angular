import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../Services/category.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubcribtion?: Subscription

  

  constructor(private categoryService:CategoryService ,
  private route:Router
  ) {
    this.model = {
      Name: '',
      UrlHandle: ''
    };
  }

  onFormSubmit() {
   this.addCategorySubcribtion = this.categoryService.addCategory(this.model).subscribe({
        next: () => {
          this.route.navigateByUrl('/admin/categories')
           // alert('Category added successfully');
        },
        error: (err) => {
            alert(`Failed to add category: ${err.message}`);
        }
    });
}


  //write code on destroy method to unsubscribe the subscription
  ngOnDestroy():void {
      this.addCategorySubcribtion?.unsubscribe();
  }

}
