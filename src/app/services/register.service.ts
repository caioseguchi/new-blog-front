import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponse } from '../types/register-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  //Variables
  apiUrl: string = 'http://localhost:8080/auth/register';

  //Constructor
  constructor(private httpClient: HttpClient) {}

  //Funcions
  register(name: String, email: String, password: String) {
    return this.httpClient
      .post<RegisterResponse>(this.apiUrl, {
        userEmail: email,
        userPassword: password,
        userFullName: name,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.userFullName);
          sessionStorage.setItem('userId', value.userId.toString());
        })
      );
  }
}
