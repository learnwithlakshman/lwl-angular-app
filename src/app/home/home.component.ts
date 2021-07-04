import { ContactService } from './../shared/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teams = ["CSK","RCB","MI","SRH"];
  contacts:any[]=[];
  selectedContact:any;

  
  constructor(private contactService:ContactService) {
        this.contacts = this.contactService.getContacts();
   }

  ngOnInit(): void {
  }

  showProfile(email:string){
     this.selectedContact =  this.contacts.filter(c=>c['email'] === email)[0];
  }

}
