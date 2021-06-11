import { Component, OnInit } from '@angular/core';
import {FlightService} from '../../service/flights.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit{

  flights: any;
  currentFlight:any = null;
  currentIndex = -1;
  flight = '';

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }

  retrieveFlights(): void {
    this.flightService.getAll()
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFlights();
    this.currentFlight = null;
    this.currentIndex = -1;
  }

  setActiveFlight(x:any, index:any): void {
    this.currentFlight = x;
    this.currentIndex = index;
  }

  removeAllFlights(): void {
    this.flightService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveFlights();
        },
        error => {
          console.log(error);
        });
  }

  searchflight(): void {
    this.flightService.findByflight(this.flight)
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}