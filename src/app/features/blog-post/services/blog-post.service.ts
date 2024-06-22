import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blogs-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost): Observable<BlogPost> {
  return this.http.post<BlogPost>(`${environment.apiBaseUrl}/BlogPosts`, data); 
}  
fetchAllBlogPosts(): Observable<BlogPost[]> {
  return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/BlogPosts`);
}
GetBlogPostById(id: string): Observable<BlogPost> {
  return this.http.get<BlogPost>(`${environment.apiBaseUrl}/BlogPosts/${id}`);
}
UpdateBlogPost(id: string, data: any): Observable<BlogPost> {
  return this.http.put<BlogPost>(`${environment.apiBaseUrl}/BlogPosts/${id}`, data);
}
DeleteBlogPost(id: string): Observable<any> {
  return this.http.delete<any>(`${environment.apiBaseUrl}/BlogPosts/${id}`);
}
}