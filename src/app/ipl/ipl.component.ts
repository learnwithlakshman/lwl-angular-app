import { Player } from './model/player.model';
import { TeamCountAndAmount } from './model/teamstat.model';
import { IplService } from './ipl.service';
import { Component, OnInit } from '@angular/core';
import { ChartSelectEvent, GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css']
})
export class IplComponent implements OnInit {

  teamStat:TeamCountAndAmount[] = [];
  players: Player[] = [];
  selectedTeam:string="";
  columnChart: any;
  pieChartData:any[] = []
  teamName:string="";
  constructor(private iplService:IplService) { }

  ngOnInit(): void {
    
        this.iplService.getEachTeamAmount().subscribe(res=>{
            this.teamStat = res;
            this.showTeamStatChart();
        })

  }

  playerData(teamName:string){
      this.selectedTeam = teamName;
      this.iplService.getPlayers(teamName).subscribe(res=>{
        this.players = res;
      })
  }

  showTeamStatChart(){
     let data:any[] = []
     data.push(['Team','Amount'])
     this.teamStat.forEach(team=>{
        data.push([team.teamName,team.amount]);
     })
     console.log(data);

     this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: data,
      options: {
        title: 'IPL 2020 Team Stat',
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true
        }
      }
    };
  }

  select(event:ChartSelectEvent){
    this.teamName = event.selectedRowFormattedValues[0];
    this.showTeamStatPieChart();
  }
  showTeamStatPieChart() {
    this.iplService.getRoleAmountAndCount(this.teamName).subscribe(res=>{
     this.pieChartData = [];
      this.pieChartData.push(["Role","Amount"]);
      res.forEach(ele=>{
        this.pieChartData.push([ele["role"],ele["amount"]])
      })
      this.drawPieChart();
    })

    
  }
  drawPieChart(){
    this.pieChart.dataTable = this.pieChartData;
    let ccComponent = this.pieChart.component;
    let ccWrapper = ccComponent?.wrapper;
    ccComponent?.draw();
  }


  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable:this.pieChartData,
    options: {'title': 'Tasks','height':400,'width':600},
  };


  selectPie(event:ChartSelectEvent){
    let role= event.selectedRowFormattedValues[0];
     console.log("Team :"+this.teamName+" "+role);
    }
}
