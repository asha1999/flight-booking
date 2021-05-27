import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
 /*getUserDetails(username:String,password:String){

    //post these details to the api server return userinfoif correct
      return this.http.get('/api/getUserDetails')

  }*/
}
