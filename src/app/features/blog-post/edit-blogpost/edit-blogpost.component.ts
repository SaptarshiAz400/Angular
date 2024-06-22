import { Component } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { editBlogPost } from '../models/edit-blogs-post.model';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent {
  blogPostId:string| null = null;
  blogPost?: BlogPost;
  constructor(private blogPostService: BlogPostService,
    private router: Router,
    private route: ActivatedRoute)
   {  }
   ngOnInit() {
    this.route.paramMap.subscribe({
      next:(params) => {
        this.blogPostId=params.get('id');
        if(this.blogPostId){
          this.blogPostService.GetBlogPostById(this.blogPostId).subscribe({
            next: (data: any) => {
              this.blogPost= data;
              
            },
            error: (err: any) => {
              alert(`Failed to get blog post: ${err.message}`);
            }
          });
        }
      }
    })
  }
  onSubmit(): void {
  const updateBlogPostRequest: editBlogPost = {
   

    title: this.blogPost?.title??'',
    shortDescription: this.blogPost?.shortDescription??'',
    content: this.blogPost?.content??'',
    featuredImageUrl: this.blogPost?.featuredImageUrl??'',
    urlHandle: this.blogPost?.urlHandle??'',
    publishedDate: this.blogPost?.publishedDate??new Date(),
    author: this.blogPost?.author??'',
    isVisible: this.blogPost?.isVisible??false,
  
  };
  if(this.blogPostId)
    {
      this.blogPostService.UpdateBlogPost(this.blogPostId, updateBlogPostRequest).subscribe({
        next: () => {
          this.router.navigate(['admin/blogposts']);
        },
        error: (err: any) => {
          alert(`Failed to update blog post: ${err.message}`);
        }
      });
    }
  }
}
