import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }

    addUser(username:String,email:string,password:string){
      var body:any={};
      body['username']=username;
      body['email']=email;
      body['password']=password;
  
     this.http.post('http://localhost:5000/register',body).subscribe(
       (data)=>{
         this.router.navigateByUrl('/register');
       },
       (error)=>{console.log(error);}
     );
  
    }

  ngOnInit(): void {
  }

}
