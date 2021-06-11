import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector";
  }


  onSubmit(register: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
      "name":register.value[''].name,
      "email":register.value[''].email,
      "password":register.value[''].password
    };
    
    //send http request
    // console.log(register.value['']);
    this.http.post<any>('http://localhost:3000/register', body, {headers:headers})
    .subscribe(res=> {
      // console.log(res);
      if(res._id!==''){
        alert('Register successffully');
        this._router.navigate(['login'])
      }else{
        alert('Please make sure your details')
      }
      
    },(err:HttpErrorResponse)=>{
      alert('Make sure you are enetring Email which havent used')
    });
    
  }
  ngOnDestroy(){
    document.body.className="";
  }
}