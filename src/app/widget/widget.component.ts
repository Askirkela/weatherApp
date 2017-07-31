import { Component, Input } from '@angular/core';
import { Weather } from './weather';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() weather: Weather;
  constructor() { }


}
