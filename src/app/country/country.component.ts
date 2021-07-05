import { Country } from './../shared/model/country';
import { CountryService } from './../shared/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryArr:Country[] = []
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {

      this.countryService.getCountryInfo().subscribe(res=>{
            this.countryArr = res;
            console.log(this.countryArr);
      },error=>{
           console.log("When fetching country info:{error}")
      })
      

  }

}
