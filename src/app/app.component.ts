import { Component, OnInit } from '@angular/core';
import { Weather } from './widget/weather';
import { WeatherService } from './widget/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {  }
  title = 'WeatherApp';
  widgets: Weather[];

  getWeather(): void {
    this.weatherService.getWeather().then(weathers => this.widgets = weathers);
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
