import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { retry, switchMap } from "rxjs/operators";
import { AccuWeatherForcast } from './forecast.model';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {

  constructor(private WeatherService: WeatherService) { }

  forecast: Observable<AccuWeatherForcast> = timer(0,30*1000).pipe(
    switchMap(()=> this.WeatherService.get5DaysForecasts()),
    retry(2)
  );

  // of({}).pipe(
  //   mergeMap(() => this.WeatherService.get5DaysForecasts()),
  //   delay(60*1000),
  //   repeat()
  //   );

}
