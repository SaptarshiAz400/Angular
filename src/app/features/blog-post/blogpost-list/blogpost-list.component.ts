import { Component } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent {
  constructor(private blogpostService: BlogPostService) {
    
  }
  blogposts$?: Observable<BlogPost[]>;
  ngOnInit() {
   
   this.blogposts$ = this.blogpostService.fetchAllBlogPosts()
   console.log(this.blogposts$)
  }
//write the code to delete the blog post
deleteBlogPost(id: string) {
  this.blogpostService.DeleteBlogPost(id).subscribe(() => {
    this.blogposts$ = this.blogpostService.fetchAllBlogPosts();
  });
}
  
}
