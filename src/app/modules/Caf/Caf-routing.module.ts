import { Route,RouterModule, Routes } from "@angular/router";
import { CreateCafComponent } from "./create-caf/create-caf.component";
import { NgModule } from "@angular/core";
import { ShareingComponent } from "./shareing/shareing.component";


const routes: Routes = [
    {
        path: '',component: ShareingComponent, children: [
            { path: '', component: CreateCafComponent },
            { path: 'CreateCaf', component: CreateCafComponent }
           
        ],
        
    }
   
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class CafRoutingModule {

}