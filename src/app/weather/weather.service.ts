import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Weather } from './weather';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
    private url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private apiKeyString = '&APPID=dc393667966650c4415b7190103fcc7d';
    private metricString = '&units=metric';
    public widgets: Weather[];
    constructor(private http: Http) {  this.widgets = [];  }

    getWeather(): Weather[] {
        console.log(this.widgets);
        return this.widgets;
    }

    private handleError(error: any) {
        console.error('ERROR : ', error);
        return Promise.reject(error.message || error);
    }

    create(city: string): /* Promise<Weather> */ Promise<void> {
        return this.http.get(this.url + city + this.apiKeyString + this.metricString)
            .toPromise()
            .then(res => {
                const w = new Weather(
                    res.json()['name'],
                    res.json()['sys']['country'],
                    res.json()['main']['temp'],
                    res.json()['weather'][0]['id'],
                    res.json()['weather'][0]['description']);
                this.widgets.push(w);
                /* return w; */
            })
            .catch(this.handleError);
    }

    delete(weather: Weather): void {
        this.widgets = this.widgets.filter(w => w !== weather);
    }

}
