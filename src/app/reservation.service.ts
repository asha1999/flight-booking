import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  
 
  getReservation(id:any){
    return this.http.get('http://localhost:4000/reservations/'+id);
   }

   private BASE_URL = 'http://localhost:4000/reservations/';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}`);
  }

  createAppointment(flight:any,source:any,destination:any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/reservation',{flight,source,destination});
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
