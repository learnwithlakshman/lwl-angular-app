import { IplService } from './../ipl.service';
import { LoginUser } from './../team/loginuser.model';
import { LocalStorageService } from './../localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  isUserLoggedIn = false;
  constructor(private localStorageService:LocalStorageService,private fb:FormBuilder,private iplservice:IplService,private router:Router) { 
    
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.localStorageService.get("token")){
      this.router.navigateByUrl('/iplstat/teamstat');
      return;
    }
  }

  login(){
     
      let loginUser: LoginUser = this.form.value;
      this.iplservice.login(loginUser).subscribe(res=>{
          let token = res["token"];
          this.localStorageService.set("token",token);
          this.iplservice.addUsername(loginUser.username);
          this.isUserLoggedIn = true;
          this.router.navigateByUrl('/iplstat/teamstat');
      },
      error=>{
          console.log(error);
      })
  }

}
