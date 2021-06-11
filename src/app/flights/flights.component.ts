import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {FlightService} from '../service/flights.service'
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {
  

  allFlights:any;
  constructor(private _FlightSearch:FlightService,private router:Router) { }

  ngOnInit(): void {
    console.log('on init -flights.components');
    this._FlightSearch.getSourceFlight().subscribe((result)=>
    {
      console.log(result);
      this.allFlights=result
    })
  }

  makeBooking(){
    this.router.navigate(['/login']);
  
  }
  searchflight(): void {
    this._FlightSearch.findByflight(this.allFlights)
      .subscribe(
        data => {
          this.allFlights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

}
}
