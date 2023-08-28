import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCafComponent } from './create-caf/create-caf.component';
import { CafRoutingModule } from './Caf-routing.module';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareingComponent } from './shareing/shareing.component';
import { ValueArrayPipe } from './valueArray.pipe';






@NgModule({
  declarations: [
    CreateCafComponent,
    ShareingComponent,
    ValueArrayPipe

    
   
  ],

 
  
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    CafRoutingModule

  ]
})
export class CafModule { }
