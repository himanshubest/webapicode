import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicMasterList } from '../models/TopicMasterList';
import { environment } from '../environments/environment.prod';
import { topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class CafService {
  httphead:HttpHeaders
  constructor(private htpclnt:HttpClient) {
     this.httphead= new HttpHeaders({'content-type': 'application/json' });
   }

   GetTopics(cafid:number,EmailAddress:string):Observable<HttpResponse<topic[]>>{
    const paramsIoS = new HttpParams().set('cafid', cafid).set('EmailAddress', EmailAddress);
          return this.htpclnt.post<topic[]>(environment.apiAddress+ "/api/CafService/"+cafid+"/"+EmailAddress,{cafid,EmailAddress},{ headers: this.httphead, observe: 'response' })
   }
}
