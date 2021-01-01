import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey: string = '5ef869099e3841aabd3d598016157b6e';

  constructor(private http: HttpClient) {}

  public getTopHeadlines(country: string) {
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.apiKey}`
    );
  }
  public getEverything(country: string, query: string) {
    return this.http.get(
      `http://newsapi.org/v2/top-headlines??country=${country}&q=${query}&apiKey=${this.apiKey}`
    );
  }
}
