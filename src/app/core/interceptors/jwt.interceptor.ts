import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUwMmRhMTc5NmJjODE4ZDRhMmFkZmFjNzY4ODk2NiIsInN1YiI6IjVmZDkzYjU0MWYzZTYwMDA0MGIzZWYyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qhzcdy_j4vghtU4eru8Q-rOtuQ0QeXGyod0vb0h7WLs'
      }
    })
    
    return next.handle(request);
  }
}
