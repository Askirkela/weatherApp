import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WeatherComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot ([{
      path: 'weather',
      component: WeatherComponent
    }, {
      path: 'settings',
      component: SettingsComponent
    }, {
      path: '',
      redirectTo: '/weather',
      pathMatch: 'full'
    }])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

