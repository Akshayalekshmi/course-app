import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

const routes: Routes = [{path:"",component:AddcourseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
