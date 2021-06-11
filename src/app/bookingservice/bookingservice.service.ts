import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

 
  uri = 'http://localhost:7777';

  constructor(private http: HttpClient) {
  }

  getBooking() {
    return this.http.get(`${this.uri}/bookings`);
  }

  getBookingById(id:any) {
    return this.http.get(`${this.uri}/book/${id}`);
  }
  addIssue(flight:any, name:any, email:any) {
    const booking = {
      flight: flight,
      name: name,
      email: email,
    
    };
    return this.http.post(`${this.uri}/book/add`, booking);
  }
  deleteBooking(id:any) {
    return this.http.get(`${this.uri}/booking/delete/${id}`);
  }
}
    

