import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AuthGuard
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule',
    //canActivate: [AuthGuard], 
  },
  {
    path: 'event-create',
    loadChildren:
      './event-create/event-create.module#EventCreatePageModule',
    //canActivate: [AuthGuard],
  },
  {
    path: 'event-list',
    loadChildren: './event-list/event-list.module#EventListPageModule',
    //canActivate: [AuthGuard],
  },
  {
    path: 'event-detail/:id',
    loadChildren:
      './event-detail/event-detail.module#EventDetailPageModule',
    canActivate: [AuthGuard],
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'reset-password',
    loadChildren:
      './reset-password/reset-password.module#ResetPasswordPageModule',
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupPageModule',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
