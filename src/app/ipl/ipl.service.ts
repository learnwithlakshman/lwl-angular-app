import { RoleCount } from './model/rolecount.model';
import { Player } from './model/player.model';
import { Observable } from 'rxjs';
import { TeamCountAndAmount } from './model/teamstat.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IplService {
 
 

  base_url = "http://localhost:8080/iplstat/";
  constructor(private http:HttpClient) { }

  getEachTeamAmount():Observable<TeamCountAndAmount[]>{
     return this.http.get<TeamCountAndAmount[]>(`${this.base_url}api/ipl/teamstat`)
  }
  getPlayers(teamName: string):Observable<Player[]> {
    return this.http.get<Player[]>(`${this.base_url}api/ipl/${teamName}`)
  }

  getRoleAmountAndCount(teamName: string) :Observable<RoleCount[]>{
    return this.http.get<RoleCount[]>(`${this.base_url}api/ipl/roleamountandcount/${teamName}`);
  }
}
