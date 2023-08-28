import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/Account/Login/login.component';
import { AccountModule } from './modules/Account/account.module';
import { CreateCafComponent } from './modules/Caf/create-caf/create-caf.component';



const routes: Routes = [
  { path: '', loadChildren: () => AccountModule },
  { path: 'CreateCaf',  loadChildren: () => import('./modules/Caf/caf.module').then(m => m.CafModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
