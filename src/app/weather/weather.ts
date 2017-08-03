export class Weather {
    constructor(name: string, country: string, temp: string, wId: number, wDesc: string) {
        this.name = name;
        this.country = country;
        this.temp = Math.round(parseFloat(temp));
        this.weatherIcon = 'wi wi-owm-' + wId;
        this.weatherDesc = wDesc;
    }
    name: string;
    country: string;
    temp: number;
    weatherDesc: string;
    weatherIcon: string;
}
