import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = environment['title']; // Weather App';
    footerText = environment['footer']; // Created by Luc Debène (2017)';
}
