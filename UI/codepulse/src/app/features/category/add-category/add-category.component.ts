import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
//write method here method name is OnSubmit its takes html form as parameter
onFormSubmit(form: any) {
    console.log(form);
  }
}
