import { Component } from '@angular/core';

import { WeatherService } from '../weather/weather.service';
import { Weather } from '../weather/weather';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: []
})
export class SettingsComponent {
    weathers: Weather[];
    constructor(private weatherService: WeatherService) { this.weathers = []; }

    add(city: string): void {
        this.weatherService.create(city);
    }
}
