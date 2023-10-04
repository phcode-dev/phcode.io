import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {
  }

  /**
   * @param request
   * @param next
   * @returns response from api.
   * Intercepts api and sends it to userService
   * to set next page link in localStorage
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let req: Observable<HttpEvent<any>>;
    req = next.handle(request);
    return req.pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event.body;
        }
      })
    );
  }
}
