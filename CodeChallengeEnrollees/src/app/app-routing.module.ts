import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { EnrolleesDetailsComponent } from './enrollees-details/enrollees-details.component';
import { UpdateEnrolleesComponent } from './update-enrollees/update-enrollees.component';


const routes: Routes = [
  { path: '', redirectTo: 'enrollee', pathMatch: 'full' },
  { path: 'enrollees', component: EnrolleesListComponent },
  { path: 'details/:id', component: EnrolleesDetailsComponent },
  { path: 'update/:id', component: UpdateEnrolleesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
