import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpResponse } from './httpResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: any;
  user: any;
  admin: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  registerUser(user: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post<httpResponse>(
      'http://localhost:3000/register',
      user,
      { headers: headers }
    );
  }

  authenticateUser(user: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post<httpResponse>('http://localhost:3000/login', user, {
      headers: headers,
    });
  }

  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.authToken ? this.authToken : 'noauth',
    });

    return this.http.get<httpResponse>('http://localhost:3000/profile', {
      headers: headers,
    });
  }

  storeUserData(token: any, user: any) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    window.location.reload();
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  admins() {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.authToken ? this.authToken : 'noauth',
    });
    return this.http
      .get<boolean>('http://localhost:3000/dashboard', { headers: headers })
      .pipe(
        map((res: boolean) => {
          return res;
        })
      );
  }
  getAdmin(){
    return this.admins().subscribe(res => {
      if(res){
          return true;
      }else{
          return false;
      }
  })
  }
  getAdminData(){
    let data = JSON.parse(localStorage.getItem('user') || '{"admin": false}')
    return data.admin;
  }
}
