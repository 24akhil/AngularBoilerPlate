import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.showLoader(true);
    setTimeout(() => {
     

    }, 5000);
    return next.handle(request).pipe(
      finalize(() =>  this.loader.showLoader(false))     
    );
  }
}
