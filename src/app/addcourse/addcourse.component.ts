import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
  courseTitle:"",
  courseDescription:"",
  courseDuration:"",
  courseVenue:"",
  courseDate:""

}

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.api.Addcourse(this.course)
    .subscribe((data)=>{

    }
    )

 
    alert("Success");

  }

}
