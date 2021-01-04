import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AccuWeatherForcast } from './forecast.model';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  get5DaysForecasts(): Observable<AccuWeatherForcast> {
    const url: string = '/api/weather/forcast5days';

    let params = new HttpParams();
    params = params.append('metric', 'true')

    return this.http.get<AccuWeatherForcast>(url, { params })
  }

  getHourly(): Observable<AccuWeatherForcast> {
    const url: string = '/api/weather/hourly';

    let params = new HttpParams();
    params = params.append('metric', 'true')

    return this.http.get<AccuWeatherForcast>(url, { params })
  }
}
