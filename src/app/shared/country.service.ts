import { Country} from './model/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountryInfo():Observable<Country[]>{
      return this.http.get<Country[]>("https://restcountries.eu/rest/v2/all");
  }
}
