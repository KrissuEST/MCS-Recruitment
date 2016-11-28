import { Component } from '@angular/core';

@Component({
    templateUrl: './weather-station.html',
	dataUrl: './wstation.json',
    styleUrls: ['./weather-station.css']
})
export class WeatherStationComponent {
	public status = "Work in progress";
	public time_updated = "2016-08-08 15:57:50";
}
