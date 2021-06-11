import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {BookingserviceService} from '../bookingservice/bookingservice.service';
import {FlightSearch} from '../flight-search';


@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent{

/*
  public reservationID:any;
  public lreservation:any;
   constructor(private route:ActivatedRoute,private router:Router,private _search:ReservationService) { }
 
   ngOnInit(): void {
     this.route.paramMap.subscribe(params =>{
       this.reservationID=params.get('id');
     });
     this.reservationID=this.route.snapshot.paramMap.get('id')
   }
 
   more(){
     this._search.getReservation(this.reservationID).subscribe((result)=>{
       console.log(result);
       this.lreservation=result;
     })
   }
 
   
   option(){
     this.router.navigate(['/details']);
   }
 
}
FlightSearch:any;
  

  displayedColumns = ['flight', 'name', 'email'];

  constructor(private issueService:BookingserviceService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
    .getBooking()
    .subscribe(data => {
      this.FlightSearch = data;
      console.log('Data requested ... ');
      console.log(this.FlightSearch);
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
}*/
}
 

