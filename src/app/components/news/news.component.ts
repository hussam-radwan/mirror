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
  sliceIndex:number =0;

  constructor(newsApi: NewsService) {
    newsApi.getTopHeadlines('us').subscribe((response: any) => {
      if (response.status === 'ok') this.newsList = response.articles;
    });
    // newsApi.getEverything('','bbc').subscribe((response: any) => {
    //   if (response.status === 'ok') this.newsList = response.articles;
    // });
  }

  ngOnInit(): void {
    this.changeMessageAfter(5)
  }


  changeMessageAfter(seconds:number){
    setTimeout(()=>{
      if(this.sliceIndex==this.newsList.length){
        this.sliceIndex=0
      }else{
        this.sliceIndex++;
      }
      this.changeMessageAfter(seconds)
    },1000*seconds)
  }
}
