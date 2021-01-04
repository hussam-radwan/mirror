import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MotivationalComponent } from './components/motivational/motivational.component';
import { NewsComponent } from './components/news/news.component';
import { CardComponent } from './components/card/card.component';
import { EventsComponent } from './components/events/events.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './components/weather/weather.service';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    CalendarComponent,
    MotivationalComponent,
    NewsComponent,
    CardComponent,
    EventsComponent,
    WeatherComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
