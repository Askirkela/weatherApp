import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WIDGETS } from './mock-weathers';

@Injectable()
export class WeatherService {
    getWeather(): Promise<Weather[]> { return Promise.resolve(WIDGETS); }
}
