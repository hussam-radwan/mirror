import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  
  constructor(private http: HttpClient) { }

  public getStats(){
    return this.http.get('/api/system-stats')
  }
}
