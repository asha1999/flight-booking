import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-project';
  constructor(private service:AuthService){}
  ngOnInit(){
    //this.getUserDatafromApi();
  }
 /* getUserDatafromApi()
  {
    this.service.getUserDetails().subscribe((response)=>
    {
      console.log("response from Api",response)
    },(error)=>{console.log("error",error)})
  }*/
  
}
