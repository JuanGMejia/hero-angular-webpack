import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { EntityState } from '../../store/reducers/index';
import * as HeroActions from '../actions/index';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    counter = 0;
    constructor(private store: Store<EntityState>) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.counter++;
        if (this.counter === 1) {
            this.showLoading(true);
        }
        return next.handle(request)
            .pipe(
                tap(
                    event => {
                        this.success(event);
                    },
                    error => {
                        this.error(error);
                    }
                ),
                finalize(() => {
                    if (this.counter <= 0) {
                        this.showLoading(false);
                    }
                })
            );
    }

    private showLoading(flat: boolean): void {
        this.store.dispatch(new HeroActions.SetShowLoading(flat));
    }

    private success(event) {
        if (event instanceof HttpResponse) {
            this.counter--;
        }
    }

    private error(error) {
        if (error instanceof HttpErrorResponse) {
            this.counter--;
            if (error.status === 401) {
            }
        }
    }
}
