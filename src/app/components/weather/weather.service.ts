import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AccuWeatherForcast } from './forecast.model';


@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  get5DaysForecasts(): Observable<AccuWeatherForcast> {
    const url: string = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
    const cityCode: number = 127164; //Cairo
    const apiKey: string = 'DmdJd2c6yoLByRzWCiwiiLZGwa2neo2G';

    let params = new HttpParams();
    params = params.append('apikey', apiKey);

    return this.http.get<AccuWeatherForcast>(url + cityCode, { params })
  }
}
