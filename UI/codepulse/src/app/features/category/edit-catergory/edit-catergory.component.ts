import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-catergory',
  templateUrl: './edit-catergory.component.html',
  styleUrls: ['./edit-catergory.component.css']
})
export class EditCatergoryComponent implements OnInit {
//create a constructor and inject the service
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        params.get('id');
      }
      
    });
  }
  

}
