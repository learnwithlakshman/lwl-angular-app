import { BasicsComponent } from './basics/basics.component';
import { CbookComponent } from './cbook/cbook.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path:'',
      redirectTo:'home',
      pathMatch: 'full'
    },
    {
      path:'basics',
      component:BasicsComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'todo',
      component: TodoComponent
    },
    {
      path:'cbook',
      component: CbookComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
