import { Injectable } from "@angular/core";
import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from "rxjs";
import { AuthServiceService } from "../services/auth-service.service";
import { UserDto } from "../models/UserDto";

@Injectable()
export class HttpinterceptorService implements HttpInterceptor{
  user : UserDto|undefined
  constructor(private authService: AuthServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.user= this.authService.user
   if(this.user!=undefined)
   {
      req = req.clone({
        setHeaders:{
          Authorization:`Bearer ${this.user.token}`
        }
      })
   }
      return next.handle(req)
  }
}