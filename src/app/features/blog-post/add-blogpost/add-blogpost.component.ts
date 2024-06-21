import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blogs-post.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
model:AddBlogPost;

constructor(){
  this.model = {
    title: '',
    shortDescription: '',
    content: '',
    featuredImageUrl: '',
    urlHandle: '',
    publishedDate: new Date(),
    author: '',
    isVisible: false,
    createdAt:  new Date(),
  }
}
onFormSubmit(): void {
  console.log(this.model); 
}
}
