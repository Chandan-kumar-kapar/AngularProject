import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  server_address = 'http://localhost:5000';
  send_post_request(data: FormData): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.server_address, JSON.stringify(data));
  }
}
