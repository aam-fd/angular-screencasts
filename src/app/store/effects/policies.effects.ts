import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GET_POLICIES_PENDING, GetPoliciesError, GetPoliciesSuccess} from '../actions/policies.action';
import {InjectionToken} from '@angular/core';

export const BASE_URL  = new InjectionToken('base_url');

@Injectable()
export class ProductsEffects {

  public constructor(
    private _http: HttpClient,
    private actions$: Actions,
    @Inject(BASE_URL) private _baseUrl: string
  ) {
  }
  
  // Listen for the 'GET_PRODUCTS_PENDING' action
  // @Effect()
  // products$: Observable<Action> = this.actions$.pipe(
  //   ofType(GET_POLICIES_PENDING),
  //   switchMap(() =>
  //     this._http.get(`${this._baseUrl}/products`)
  //       .pipe(
  //         map((res: { data: any[] }) => new GetPoliciesSuccess(res.data)),
  //         catchError((err) => of(new GetPoliciesError(err)))
  //       )
  //   )
  // );


}