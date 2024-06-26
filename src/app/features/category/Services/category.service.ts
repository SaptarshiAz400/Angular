import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> 
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/Categories`,model)
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/Categories`);
  }
  //write a method to get the category by id
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/Categories/${id}`);
  }
  //write a method to update the category
  updateCategory(id: string, model: UpdateCategoryRequest): Observable<void> {
    return this.http.put<void>(`${environment.apiBaseUrl}/Categories/${id}`, model);
  }
  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/Categories/${id}`);
  }
}