import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }
    addUser(email:string,password:string){
      var body:any={};
      body['email']=email;
      body['password']=password;
  
     this.http.post('http://localhost:5000/login',body).subscribe(
       (data)=>{
         this.router.navigateByUrl('/login');
       },
       (error)=>{console.log(error);}
     );
  
    }


  ngOnInit(): void {
  }
 
}

