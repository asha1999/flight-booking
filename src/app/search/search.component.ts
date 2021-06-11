import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import {FormControl, FormGroup,FormBuilder} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { HttpHeaders } from '@angular/common/http';
//import { ActivatedRoute, Router } from '@angular/router';
//import { NgForm } from '@angular/forms';
import {BookingserviceService} from '../bookingservice/bookingservice.service';
import {Router}  from '@angular/router';
import {FlightService}  from '../service/flights.service';
import {FlightSearch} from '../flight-search';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /*booking:FlightSearch[];
  

  displayedColumns = ['flight', 'name', 'email'];

  constructor(private issueService:BookingserviceService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
    .getBooking()
    .subscribe((data:FlightSearch[]) => {
      this.booking = data;
      console.log('Data requested ... ');
      console.log(this.booking);
    });
  }

  /*editIssue(id:any) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteBooking(id:any) {
    this.issueService.deleteBooking(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
 /* flights = {
    flight_id: '',
    name: '',
    email: '',
    amount:''
    
    
  };
  submitted = false;
  constructor(private bookingService:BookingserviceService ) { }

  ngOnInit(): void {
  }

  saveFlight(): void {
    const data = {
      flight: this.flights.flight_id,
      name: this.flights.name,
      email:this.flights.email,
      amount:this.flights.amount
    };

    this.bookingService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


}*/
createForm: FormGroup;

constructor(private issueService: BookingserviceService, private fb: FormBuilder, private router: Router,
  toastrservice:ToastrService) {
  this.createForm = this.fb.group({
    flight: ['', Validators.required],
    name: '',
    email: ''
  });
}

addBooking(flight:any, name:any, email:any) {
  this.issueService.addIssue(flight, name, email).subscribe(() => {
    this.router.navigate(['/bookflight']);
    
  });
}
onClick(){
  this.router.navigate(['/reservation']);
  
}

ngOnInit() {
}

}