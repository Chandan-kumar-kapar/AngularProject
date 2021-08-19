import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmpDetailsService {
  constructor(private http: HttpClient) {}

  server_address = 'http://localhost:5000/emp';

  getEmployee(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.server_address);
  }
}
