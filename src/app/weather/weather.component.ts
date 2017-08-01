import { Component, OnInit } from '@angular/core';
import { Weather } from '../widget/weather';
import { WeatherService } from '../widget/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
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
