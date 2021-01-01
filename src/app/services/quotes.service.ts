import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  public getQuotes(){
    return this.http.get('https://type.fit/api/quotes')
  }
}
