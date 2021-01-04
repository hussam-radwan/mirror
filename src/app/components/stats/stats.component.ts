import { Component, OnInit } from '@angular/core';
import Chart from 'node_modules/chart.js';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  options:any={
    cutoutPercentage: 90,
    responsive: true,
  }

  data:any={
    cpu:0,
    mem:0,
    load:0
  }

  cpuDoughnut:any;
  memoryDoughnut:any;
  loadDoughnut:any;

  constructor(private statsService:StatsService) {
  }

  ngOnInit(): void {
    this.cpuDoughnut=this.createDoughnut('cpu',this.data.cpu,'#1abc9c')
    this.memoryDoughnut=this.createDoughnut('memory',this.data.mem,'#3498db');
    this.loadDoughnut=this.createDoughnut('load',this.data.load,'#9b59b6');
    this.getUpdates()
  }

  getUpdates(){
    this.statsService.getStats().subscribe((data:any)=>{
      this.data={
        cpu:parseInt((data.cpu*100).toFixed(2)),
        mem:parseInt(((1-data.freeMemPerc)*100).toFixed(2)),
        load:parseInt(data.load.toFixed(2))
      }
      this.cpuDoughnut;
      
      // this.cpuDoughnut.data.datasets[0].data.pop()
      // this.cpuDoughnut.data.datasets[0].data.pop()
      // this.cpuDoughnut.data.datasets[0].data.push(this.data.cpu)
      // this.cpuDoughnut.data.datasets[0].data.push(100-this.data.cpu)
      this.cpuDoughnut.data.datasets[0].data[0]=this.data.cpu
      this.cpuDoughnut.data.datasets[0].data[1]=100-this.data.cpu
      this.cpuDoughnut.update()
      
      this.memoryDoughnut.data.datasets[0].data[0]=this.data.mem
      this.memoryDoughnut.data.datasets[0].data[1]=100-this.data.mem
      this.memoryDoughnut.update()

      this.loadDoughnut.data.datasets[0].data[0]=this.data.load
      this.loadDoughnut.data.datasets[0].data[1]=100-this.data.load
      this.loadDoughnut.update()
      setTimeout(()=>this.getUpdates(),5000)
    })
  }

  createDoughnut(id:string,perc:number,color:string){
    return new Chart(id, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [perc, 100-perc],
            backgroundColor: [color,'#2c3e50'],
            borderColor:['rgba(0,0,0,0)','rgba(0,0,0,0)']
          },
        ],
      },
      options:{
        cutoutPercentage: 80,
        responsive: true,
      }
      
    });
  }


}
