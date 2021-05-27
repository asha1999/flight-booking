import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'search',component:SearchComponent},
  {path:'flights',component:FlightsComponent},
  {path:'bookflight',component:BookflightComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisterComponent,HomeComponent,AdminComponent,LoginComponent,
  SearchComponent,FlightsComponent,BookflightComponent];
