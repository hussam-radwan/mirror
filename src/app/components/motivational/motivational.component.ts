import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

enum TYPE {
  QUOTE,
  MOTIVATIONAL,
}

interface message {
  type: TYPE;
  text: string;
  author?: string;
}

@Component({
  selector: 'app-motivational',
  templateUrl: './motivational.component.html',
  styleUrls: ['./motivational.component.css'],
})
export class MotivationalComponent implements OnInit {
  messages: Array<message> = [
    {
      type:TYPE.MOTIVATIONAL,
      text:'You look awesome!'
    },
    {
      type:TYPE.MOTIVATIONAL,
      text:'I cant fix ugly...'
    },
  ];

  index: number = 0;

  constructor(quotesService:QuotesService) {
    quotesService.getQuotes().subscribe((observable:any)=>{
      observable.map((item:any)=>{
        this.messages.push({
          ...item,
          type:TYPE.QUOTE
        })
      })
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit(): void {
    this.changeMessageAfter(5)
  }

  changeMessageAfter(seconds:number){
    setTimeout(()=>{
      this.index = this.getRandomInt(this.messages.length);
      this.changeMessageAfter(seconds)
    },1000*seconds)
  }
}
