import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';




@NgModule({
  declarations: [
    LoginComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AccountRoutingModule
    
  ]
})
export class AccountModule { }
