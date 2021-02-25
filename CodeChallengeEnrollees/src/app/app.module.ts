import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { EnrolleesDetailsComponent } from './enrollees-details/enrollees-details.component';
import { UpdateEnrolleesComponent } from './update-enrollees/update-enrollees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
{
    path: '',
    redirectTo: 'enrollee',
    pathMatch: 'full'
},
{
    path: 'enrollees',
    component: EnrolleesListComponent
},
{
    path: 'details/:id',
    component: EnrolleesDetailsComponent
},
{
    path: 'update/:id',
    component: UpdateEnrolleesComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    EnrolleesListComponent,
    EnrolleesDetailsComponent,
    UpdateEnrolleesComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
