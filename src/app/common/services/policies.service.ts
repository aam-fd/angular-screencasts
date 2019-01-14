import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy';
// import { environment } from '../../../policies.json';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(
    private _http: HttpClient
  ) { }

  public getPolicies(): Observable<Policy[]> {
    return this._http.get<Policy[]>('policies.json');
  }
}
