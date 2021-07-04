import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
 
  @Input()
  selectedContact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
