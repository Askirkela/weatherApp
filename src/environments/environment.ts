// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  title: 'Weather App',
  welcome: 'Welcome to WeatherApp, developped for Aquafadas preselection test',
  footer: 'Created by Luc Debène (2017)',
  apiUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
  apiKeyString: '&APPID=dc393667966650c4415b7190103fcc7d',
  metricString: '&units=metric',
  settings: 'Settings'
};
