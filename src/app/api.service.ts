import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
   viewCourse=()=>{
    return this.http.get("http://localhost:3000/viewcourse")
   }
   Addcourse=(course:any)=>{
    return this.http.post<any>("http://localhost:3000/addcourse",course)
   }
}
