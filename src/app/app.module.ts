import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MotivationalComponent } from './components/motivational/motivational.component';
import { NewsComponent } from './components/news/news.component';
import { CardComponent } from './components/card/card.component';
import { EventsComponent } from './components/events/events.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    CalendarComponent,
    MotivationalComponent,
    NewsComponent,
    CardComponent,
    EventsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
