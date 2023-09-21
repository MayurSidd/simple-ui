import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/_models/weather-forecast.model';
import { WeatherService } from 'src/app/_services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  _location: any = {};

  _weatherData: WeatherForecast = new WeatherForecast();

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this._weatherService.getCurrentWeather().subscribe((response: any) => {
      this._weatherData.current_weather = response.current_weather;
    });
  }
}
