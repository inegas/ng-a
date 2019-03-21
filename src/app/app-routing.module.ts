import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailtUserComponent } from './components/user/detailt-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'user/:id', 
    component: UserComponent,
    children: 
    [
      { path: 'new', component: NewUserComponent},
      { path: 'edit', component: EditUserComponent},
      { path: 'detail', component: DetailtUserComponent},
      // { path: '**', redirectTo: 'editar'}
    ]
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
