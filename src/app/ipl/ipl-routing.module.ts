import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { IplComponent } from './ipl.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    {
      path:'',
      component: IplComponent,
     
      children:[
        {
          path:'',
          redirectTo:'login'
        },
        {
          path:'login',
          component:LoginComponent
        },
        {
          path:'teamstat',
          component: TeamComponent,
          canActivate:[LoginGuard]
        },
        {
          path:'amountstat',
          component: HomeComponent,
          canActivate:[LoginGuard]
        }
      ]
    }
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IplRoutingModule { }
