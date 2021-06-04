import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '' , redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard' , component: DashboardComponent, data:{title : 'Dashboard'}},
  { path: 'books' , component: BookDetailsComponent, data:{title : 'Books'}},
  { path: '**' , redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
