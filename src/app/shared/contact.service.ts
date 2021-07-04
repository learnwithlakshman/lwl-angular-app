import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor() { }


  getContacts(){
    return this.arr;
  }

 arr =[{
    "name": "Bernete",
    "email": "brouse0@squidoo.com",
    "phone": "577-938-3733"
  }, {
    "name": "Roz",
    "email": "rwalenta1@soundcloud.com",
    "phone": "813-669-9680"
  }, {
    "name": "Emmalynne",
    "email": "ewhittleton2@youtube.com",
    "phone": "214-649-4277"
  }, {
    "name": "Pate",
    "email": "pnornable3@businessinsider.com",
    "phone": "701-328-8170"
  }, {
    "name": "Roxana",
    "email": "rcossans4@mail.ru",
    "phone": "508-953-1768"
  }, {
    "name": "Sammy",
    "email": "srival5@sphinn.com",
    "phone": "939-308-1545"
  }, {
    "name": "Ulick",
    "email": "umotton6@live.com",
    "phone": "790-148-4790"
  }, {
    "name": "Carmina",
    "email": "cblue7@cisco.com",
    "phone": "168-834-3681"
  }, {
    "name": "Arnoldo",
    "email": "alauchlan8@arstechnica.com",
    "phone": "481-290-4222"
  }, {
    "name": "Ogdan",
    "email": "oturgoose9@squidoo.com",
    "phone": "143-724-1459"
  }];

}
