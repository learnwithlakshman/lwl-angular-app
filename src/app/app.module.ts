import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CbookComponent } from './cbook/cbook.component';
import { TodoComponent } from './todo/todo.component';
import { ViewcontactComponent } from './home/viewcontact/viewcontact.component';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CbookComponent,
    TodoComponent,
    ViewcontactComponent,
    BasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
