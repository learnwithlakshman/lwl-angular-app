import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  title1 = "Data binding";
  link = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  bulblink='../assets/images/on.png';
  status = true;
  message = "Welcome to Angular world";
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
        this.message = "Updated welcome message.....";
    },5000)
  }

  changeStatus(){
      if(this.status){
        this.bulblink='../assets/images/off.png';
  
      }else{
        this.bulblink='../assets/images/on.png';
       }
      this.status = !this.status;
  }

  servers = [

      {
        ip:'876.345.234.22',
        status:true
      },
      {
        ip:'876.345.234.92',
        status:false
      },
      {
        ip:'276.345.234.22',
        status:true
      },
      {
        ip:'276.345.234.82',
        status:false
      }

  ]
}
