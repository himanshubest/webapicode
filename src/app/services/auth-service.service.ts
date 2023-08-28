import { Injectable } from '@angular/core';
import { UserDto } from '../models/UserDto';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AUTH_ID } from '../app.constants';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: UserDto | undefined
  httpHeaders: HttpHeaders
  constructor(private httpclint:HttpClient) { 
    this.httpHeaders= new HttpHeaders({'content-type':'application/json'})
    this.loadUser()
  }
  private loadUser() {
    const data = localStorage.getItem(AUTH_ID)
    if(data!=undefined)
    {
      this.user=JSON.parse(data)
    }   
    else
    {
      this.user=undefined
    }


  }
  SetAuthUser(user: UserDto) {
    localStorage.setItem(AUTH_ID, JSON.stringify(user))
    this.loadUser()
}
RemoveAuthUser() {
    const data = localStorage.getItem(AUTH_ID)
    if (data != undefined)
        localStorage.removeItem(AUTH_ID)
    this.loadUser()
}
  
  LoginUser(model:Login):Observable<HttpResponse<UserDto>>{
    return this.httpclint.post<UserDto>(environment.apiAddress+"/Account/Index", JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' })
  }

}
