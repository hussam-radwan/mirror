import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

interface NewsItem {
  source: {
    id: any;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsList: Array<NewsItem> = [];
  sliceIndex: number = 0;

  constructor(newsApi: NewsService) {
    newsApi.getTopHeadlines('us').subscribe((response: any) => {
      if (response.status === 'ok') this.newsList = response.articles;
    });
    // newsApi.getTopHeadlines('eg').subscribe((response: any) => {
    //   if (response.status === 'ok') this.newsList = response.articles;
    // });
    // newsApi.getEverything('','bbc arabic').subscribe((response: any) => {
    //   if (response.status === 'ok') this.newsList = response.articles;
    // });
    // newsApi.getEverything('','rt arabic').subscribe((response: any) => {
    //   if (response.status === 'ok') this.newsList = response.articles;
    // });
  }

  ngOnInit(): void {
    this.changeMessageAfter(30);
  }

  changeMessageAfter(seconds: number) {
    setTimeout(() => {
      this.sliceIndex++;
      if (this.sliceIndex == this.newsList.length) {
        this.sliceIndex = 0;
      } 
      this.changeMessageAfter(seconds);
    }, 1000 * seconds);
  }

  getClass() {
    if(this.newsList.length>0){
      
      let hasArabic = this.newsList[this.sliceIndex].title.match(/[\u0621-\u064A]+/g)
      if(hasArabic){
        return "news ar";
      }else{
        return "news";
      }
    }
    return  'news';
  }
}
