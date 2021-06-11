import { Component, OnInit } from '@angular/core';
//import { Reservation } from '../reservation';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent  {
  
  /*
  public id:any;
  constructor( private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector2";
  }
  
  onSubmit(reservation: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
     
      "Reservation_Date":reservation.value[''].resdate,
      // "Source":reservation.value[''].source,
      // "Destination":reservation.value[''].destination,
      "Train_Name":reservation.value[''].trainname,
      "Passenger":reservation.value[''].passenger,
      
    };
    
    //send http request
    console.log(reservation.value['']);
  this.http.post<any>('http://localhost:4000/reservation', body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);
      console.log(res._id);
      this.id=res._id;
     
      // console.log(this.id);
      // alert('');
      alert(`Please make a note of reservation id for further operations
             Reservation ID=${res._id}  
             Total Fare  ${res.fare}
             Date ${res.Reservation_Date}
      `);
      // alert("Details are"+res[0]);
     this.getid(this.id);
    });
    console.log(this.id);
    
  }
  getid(id:any){
    this._router.navigate(['reservation/']);
  }
  
  
  ngOnDestroy(){
    document.body.className="";
  }
}*/
}