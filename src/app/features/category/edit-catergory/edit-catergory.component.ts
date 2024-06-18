import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Component({
  selector: 'app-edit-catergory',
  templateUrl: './edit-catergory.component.html',
  styleUrls: ['./edit-catergory.component.css']
})
export class EditCatergoryComponent implements OnInit,OnDestroy {
  id:string| null = null;
  paramSubscription?: Subscription;
  editsubscription?: Subscription;
  category?: Category;
  
//create a constructor and inject the service
  constructor(private route: ActivatedRoute, 
    private categoryService : CategoryService,
    private router: Router
    ) { }
  

  ngOnInit(): void {
    this.paramSubscription =
    this.route.paramMap.subscribe({
      next:(params) => {
       this.id=params.get('id');

       if(this.id){
        //call the service method to get the category by id
        this.categoryService.getCategoryById(this.id).subscribe({
          next: (data: Category) => { // Explicitly type `data`
            this.category = data;
          },
          error: (err: any) => { // Explicitly type `err`
            alert(`Failed to get category: ${err.message}`);
          }
        });
      }
    }
    });

  }
onFromSubmit(): void {
   const updateCategoryRequest: UpdateCategoryRequest = {
    Name: this.category?.name ??'',
    UrlHandle: this.category?.urlHandle??''
};
//pass the updateCategoryRequest object to the service method
if(this.id){
this.editsubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest).subscribe({
  next: () => {
    this.router.navigate(['admin/categories']);
    //alert('Category updated successfully');
  },
  error: (err: any) => { // Explicitly type `err`
    alert(`Failed to update category: ${err.message}`);
  }
});
}
}
  
ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editsubscription?.unsubscribe();
}
}