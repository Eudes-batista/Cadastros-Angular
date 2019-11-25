import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradeComponent } from './grade.component';
import { GradeResolveGuard } from './guarda/grade-resolve.guard';


const routes: Routes = [
    { path: ':id', component: GradeComponent , resolve: {id: GradeResolveGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
