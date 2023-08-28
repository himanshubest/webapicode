import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterceptorService } from './interceptors/httpinterceptor.service';
import{SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
