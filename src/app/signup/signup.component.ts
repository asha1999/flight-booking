import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private User: UserService, private router: Router,private snackBar: MatSnackBar) {}
  signupForm = new FormGroup({
    email: new FormControl(''),
    phone_number: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });
  
createUser() {
  this.User.createNewUser(this.signupForm.value).subscribe(
    (data: any) => {
      console.log(data);
      this.router.navigate([ '/login' ]);
    },
    (err: HttpErrorResponse) => {
      if (err.error.msg) {
        this.snackBar.open(err.error.msg, 'Undo');
      } else {
        this.snackBar.open('Something Went Wrong!');
      }
    }
  );
}
  ngOnInit() {}
}
