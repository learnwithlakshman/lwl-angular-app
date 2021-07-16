import { IplService } from './../ipl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  selectedTeam:string="";
  teamNames:string[] = [];
  constructor(private iplService:IplService) { }

  ngOnInit(): void {
       this.iplService.getTeamNames().subscribe(res=>{
            this.teamNames = res["teamNames"];
        })
  }

  getTeamStat(event:any){
   let team = event.target.value;
   if(team != ""){
      //call
      console.log("You are looking more details about : "+team);
   }
  }

}
