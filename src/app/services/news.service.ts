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
      `/api/news/top-headlines?country=${country}`
    );
  }
  public getEverything(country: string, query: string) {
    return this.http.get(
      `/api/news/everything?q=${query}`
    );
  }
}
