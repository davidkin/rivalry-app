import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent  } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

import { UserResolveService } from './pages/user/user-resolve.service';
import { UserReposComponent } from './pages/user/userRepos/userRepos.component';
import { AllowedGuard } from './core/allowed.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'user/:login', 
    component: UserComponent,
    resolve: { userData: UserResolveService },
    canActivateChild: [AllowedGuard],
    children: [
      { path: 'repos',  component: UserReposComponent}
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
