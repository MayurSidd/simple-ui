import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather() {
    let latitude = 0;
    let longitude = 0;

    navigator.geolocation.getCurrentPosition((resp) => {
      latitude = resp.coords.longitude;
      longitude = resp.coords.latitude;
    });

    return this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
  }
}
