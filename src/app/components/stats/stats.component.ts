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
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    legend:{
      display:false
    },
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
    this.cpuDoughnut=this.createDoughnut('cpu',this.data.cpu)
    this.memoryDoughnut=this.createDoughnut('memory',this.data.mem);
    this.loadDoughnut=this.createDoughnut('load',this.data.load);
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

  createDoughnut(id:string,perc:number){
    return new Chart(id, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [perc, 100-perc],
            backgroundColor: ['#2980b9','#2c3e50'],
            borderColor:['rgba(0,0,0,0)','rgba(0,0,0,0)']
          },
        ],
        options:this.options
      },
      
    });
  }


}
