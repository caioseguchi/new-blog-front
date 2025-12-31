import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = 'http://localhost:8080/auth/login';

  //Create Contructor
  constructor(private httpClient: HttpClient) {}

  login(email: String, password: String) {
    return this.httpClient
      .post<LoginResponse>(this.apiUrl, {
        userEmail: email,
        userPassword: password,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.userFullName);
        })
      );
  }

  singup(name: string, email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/register', { name, email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.userFullName);
        })
      );
  }
}
