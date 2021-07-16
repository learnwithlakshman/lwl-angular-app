import { LoginUser } from './team/loginuser.model';
import { AppUser } from './team/appuser.model';
import { RoleCount } from './model/rolecount.model';
import { Player } from './model/player.model';
import { Observable, Subject } from 'rxjs';
import { TeamCountAndAmount } from './model/teamstat.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamNames } from './model/teamnames.model';

@Injectable({
  providedIn: 'root'
})
export class IplService {
 
  base_url = "http://localhost:8080/iplstat/";

  public subject = new Subject<any>();
  constructor(private http:HttpClient) { }


  register(appUser:AppUser):Observable<any>{
    return this.http.post<any>(`${this.base_url}auth/api/login`,appUser);
  }

  login(loginUser:LoginUser):Observable<any>{
    return this.http.post<any>(`${this.base_url}auth/api/login`,loginUser);
  }

  getTeamNames():Observable<TeamNames>{
   return this.http.get<TeamNames>(`${this.base_url}api/ipl/teamnames`);
  }

  getEachTeamAmount():Observable<TeamCountAndAmount[]>{
     return this.http.get<TeamCountAndAmount[]>(`${this.base_url}api/ipl/teamstat`)
  }
  getPlayers(teamName: string):Observable<Player[]> {
    return this.http.get<Player[]>(`${this.base_url}api/ipl/${teamName}`)
  }

  getRoleAmountAndCount(teamName: string) :Observable<RoleCount[]>{
     return this.http.get<RoleCount[]>(`${this.base_url}api/ipl/roleamountandcount/${teamName}`);
  }

  addUsername(username:string){
    this.subject.next(username);
  }
  removeUser(){
    this.subject.next();
  }
}
