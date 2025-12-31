import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //Create Contructor
  constructor(private httpClient: HttpClient) {}

  login(name: String, password: String) {
    return this.httpClient
      .post<LoginResponse>('/login', { name, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
          sessionStorage.setItem('userId', value.id.toString());
        })
      );
  }

  singup(name: string, email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/register', { name, email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        })
      );
  }
}
