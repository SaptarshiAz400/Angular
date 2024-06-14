import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-catergory',
  templateUrl: './edit-catergory.component.html',
  styleUrls: ['./edit-catergory.component.css']
})
export class EditCatergoryComponent implements OnInit,OnDestroy {
  id:string| null = null;
  paramSubscription?: Subscription;
  category?: Category;
  
//create a constructor and inject the service
  constructor(private route: ActivatedRoute, private categoryService : CategoryService) { }
  

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
  
ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
}
}