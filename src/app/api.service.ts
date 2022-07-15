import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
   viewCourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokapp.com/getcourses")
   }
   Addcourse=(course:any)=>{
    return this.http.post<any>("https://mylinkurcodesapp.herokapp.com/addcourses",course)
   }
}
