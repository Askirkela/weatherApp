import { Component } from '@angular/core';

import { WeatherService } from '../weather/weather.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: []
})
export class SettingsComponent {
    constructor(private weatherService: WeatherService) {  }

    add(city: string): void {
        this.weatherService.create(city);
    }
}
