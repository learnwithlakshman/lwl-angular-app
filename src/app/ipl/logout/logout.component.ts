import { Router } from '@angular/router';
import { IplService } from './../ipl.service';
import { LocalStorageService } from './../localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loginUser:any="";

  constructor(private localStorageService:LocalStorageService,private iplService:IplService,private router:Router) { }

  ngOnInit(): void {
      this.iplService.subject.subscribe(res=>{
          this.loginUser = res;
      })
  }

 
  logout(){
    this.localStorageService.remove("token");
    this.localStorageService.remove("username");
    this.router.navigateByUrl("/iplstat/login");
    this.iplService.removeUser();
  }


}
