import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    username:any;
    password:any;
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
   onClick(){
     if(this.username=="admin"&&this.password=="admin@123")
     {
      this.router.navigate(['/dashboard']);
     }
     
   }

}
