import { LocalStorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
   
    constructor(private localStorageService:LocalStorageService){
    
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token =this.localStorageService.get("token"); //Get token from some service
        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(req)
    }

}