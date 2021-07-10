import { Player } from './model/player.model';
import { TeamCountAndAmount } from './model/teamstat.model';
import { IplService } from './ipl.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css']
})
export class IplComponent implements OnInit {

  teamStat:TeamCountAndAmount[] = [];
  players: Player[] = [];
  constructor(private iplService:IplService) { }

  ngOnInit(): void {
    
        this.iplService.getEachTeamAmount().subscribe(res=>{
            this.teamStat = res;
        })

  }

  playerData(teamName:string){
      this.iplService.getPlayers(teamName).subscribe(res=>{
        this.players = res;
      })
  }


  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  public columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {
      title: 'Countries',
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };

}
