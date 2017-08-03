import { Component, Input } from '@angular/core';
import { Weather } from '../weather/weather';
import { WeatherService } from '../weather/weather.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() weather: Weather;
  constructor(private weatherService: WeatherService, private weatherComponent: WeatherComponent) { }

  delete(weather: Weather) {
    this.weatherService.delete(weather);
    this.weatherComponent.refresh();
  }

}
