import { Component, OnInit } from '@angular/core';
import {FlightService} from '../../service/flights.service';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.css']
})
export class AddFlightsComponent implements OnInit {

  flights = {
    flight: '',
    source: '',
    destination: '',
    date:'',
    fare:'',
    
  };
  submitted = false;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  saveFlight(): void {
    const data = {
      flight: this.flights.flight,
      source: this.flights.source,
      destination:this.flights.destination,
      date:this.flights.date,
      fare:this.flights.fare,
    };

    this.flightService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFlight(): void {
    this.submitted = false;
    this.flights = {
      flight: '',
      source: '',
       destination: '',
       date:'',
       fare:'',
    
    };
  }

}

