import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomHttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if(localStorage.getItem("token") !=null && request.url.startsWith(environment.endpoint)){
      request = request.clone({headers : request.headers.set('Authorization' , 'Bearer '+localStorage.getItem("token"))})
    }

    return next.handle(request);
  }
}
