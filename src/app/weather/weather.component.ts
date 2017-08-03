import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: []
})
export class WeatherComponent implements OnInit {
  title = 'WeatherApp';
  widgets: Weather[];
  constructor(private weatherService: WeatherService) {  }


  ngOnInit(): void {
    this.widgets = this.weatherService.getWeather();
  }
  refresh(): void {
    this.widgets = this.weatherService.getWeather();
  }
}
