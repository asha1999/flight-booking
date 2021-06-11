import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
//import {CdkTableModule} from '@angular/cdk/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
//import { HttpConfigInterceptor } from '../app/interceptor/httpconfig.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,FormsModule,ReactiveFormsModule,
    MatButtonModule,MatCardModule,MatToolbarModule,MatRadioModule,MatGridListModule,MatSnackBarModule, NgbModule
  ],
  
providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
