import { SharedService } from './../../services/shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "../../../../node_modules/@angular/common/http";
import { Observable } from '../../../../node_modules/rxjs';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    shared: SharedService;

    constructor(){
        this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;

        if(this.shared.isLoggedIn()){
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}