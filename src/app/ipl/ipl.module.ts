import { LoginGuard } from './login.guard';
import { IplService } from './ipl.service';

import { LocalStorageService } from './localstorage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplRoutingModule } from './ipl-routing.module';
import { IplComponent } from './ipl.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './appinterceptor';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    IplComponent,
    TeamComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    IplRoutingModule,
    Ng2GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[LocalStorageService,IplService,LoginGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true}]
  
})
export class IplModule { }
