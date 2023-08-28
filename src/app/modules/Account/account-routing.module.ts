import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Login/login.component";
import { NgModule } from '@angular/core';




const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent }
            
           
        ],
        
    }
   
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountRoutingModule{

}