import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  public searchFlights(user:any)
  {
    console.log("search component");
    return this.http.post("http://localhost:8080/api/flights",user,{responseType:'text' as 'json'})
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByflight(flight:any): Observable<any> {
    return this.http.get(`${baseUrl}?flight=${flight}`);
  }
  getSourceFlight():Observable<any>{
    return this.http.get(`${baseUrl}`);
  }
  getFlight(data:any):Observable<any>
  {
    return this.http.post(baseUrl,data);
  }
}