import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuard } from './guard/auth.guard';
import { AddFlightsComponent } from './flight-components/add-flights/add-flights.component';
import { FlightListComponent } from './flight-components/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-components/flight-details/flight-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:SignupComponent},
  {path:'search',component:SearchComponent},
  {path:'bookflight',component:BookflightComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/flights',component:FlightListComponent},
  {path:'dashboard/flights/:id',component:FlightDetailsComponent},
  {path:'dashboard/add',component:AddFlightsComponent},
  {path:'searchflights',component:FlightsComponent},
  
{
  path: '',
  canActivate: [ AuthGuard ],
  component: AppComponent //homecomponnet
}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,HomeComponent,AdminComponent,LoginComponent,
  SearchComponent,FlightsComponent,BookflightComponent,DashboardComponent,AddFlightsComponent,FlightListComponent,FlightDetailsComponent];
