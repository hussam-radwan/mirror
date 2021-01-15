import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { retry, switchMap } from "rxjs/operators";
import { AccuWeatherForcast } from './forecast.model';
import { WeatherService } from "./weather.service";
import Chart from 'chart.js'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  constructor(private WeatherService: WeatherService) { }

  ngOnInit(){
    new Chart("lineChartDays", {
      type: 'line',
			data: {
				labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
				datasets: [
        {
					label: 'Filled',
					backgroundColor: '#e67e22',
          borderColor: '#e67e22',
          borderDash: [5, 5],
					data: [
						24,25,26,28,26
					],
					fill: false,
        },
        {
					label: 'dashed',
					backgroundColor: '#3498db',
          borderColor: '#3498db',
          borderDash: [5, 5],
					data: [
						13,14,14,18,15
					],
					fill: false,
        },
      ]
			},
			options: {
        defaultFontColor:'#FFF',
        fontColor:'#FFF',
        aspectRatio:300/300,
        legend: {
          display: false
       },
				responsive: true,
				title: {
					display: true,
					text: 'Days'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
            display: true,
            ticks: {
            },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
    });
  }

  forecast: Observable<AccuWeatherForcast> = timer(0,60*60*1000).pipe(
    switchMap(()=> this.WeatherService.get5DaysForecasts()),
    retry(2)
  );

  hourly: Observable<AccuWeatherForcast> = timer(0,60*60*1000).pipe(
    switchMap(()=> this.WeatherService.getHourly()),
    retry(2)
  );

}
