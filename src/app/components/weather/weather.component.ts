import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccuWeatherForcast } from './forecast.model';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {

  constructor(private WeatherService: WeatherService) { }

  forecast: Observable<AccuWeatherForcast> = this.WeatherService.get5DaysForecasts();

}
