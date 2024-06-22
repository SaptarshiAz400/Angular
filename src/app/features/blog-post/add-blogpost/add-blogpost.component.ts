import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blogs-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
model:AddBlogPost;

constructor(private blogPostService: BlogPostService,
  private router: Router
){
  this.model = {
    title: '',
    shortDescription: '',
    content: '',
    featuredImageUrl: '',
    urlHandle: '',
    publishedDate: new Date(),
    author: '',
    isVisible: false
  }
}
onFormSubmit(): void {
  this.blogPostService.createBlogPost(this.model).subscribe({
    next: (response) => {
    this.router.navigate(['/admin/blogposts']);
    }
  }); 
}
}
