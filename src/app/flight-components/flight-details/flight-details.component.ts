import { Component, OnInit } from '@angular/core';
import {FlightService} from '../../service/flights.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit{

  currentFlight:any = null;
  message = '';

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFlight(this.route.snapshot.paramMap.get('id'));
  }

  getFlight(id:any): void {
    this.flightService.get(id)
      .subscribe(
        data => {
          this.currentFlight = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 /* updatePublished(status): void {
    const data = {
      flight: this.currentFlight.flight,
      source: this.currentFlight.source,
      published: status
    };

    this.flighgtService.update(this.currentFlight.id, data)
      .subscribe(
        response => {
          this.currentFlight.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }*/

  updateFlight(): void {
    const data = {
      flight: this.currentFlight.flight,
      source: this.currentFlight.source,
      destination:this.currentFlight.destination,
      date:this.currentFlight.date,
      fare:this.currentFlight.fare,
    };
    this.flightService.update(this.currentFlight.id, this.currentFlight)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The flight was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFlight(): void {
    this.flightService.delete(this.currentFlight.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/dashboard/flights']);
        },
        error => {
          console.log(error);
        });
  }
}


