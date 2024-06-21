import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCatergoryComponent } from './features/category/edit-catergory/edit-catergory.component';
import { FormsModule } from '@angular/forms';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent
   
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
   
  },
  //write the route for edit category
  {
    path: 'admin/categories/:id',
    component: EditCatergoryComponent
  },
  {
    path: 'admin/blogposts',
    component: BlogpostListComponent
  },
  {
    path: 'admin/blogposts/add',
    component: AddBlogpostComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
