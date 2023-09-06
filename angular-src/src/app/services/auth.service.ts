import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { httpResponse } from './httpResponse';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authToken : any;
  user : any;

  constructor(
    private http:HttpClient,
    private jwtHelper: JwtHelperService) { }

  registerUser(user:any){
    let headers = new HttpHeaders({'Content-Type': 'application/json', "Accept": "application/json"});
    return this.http.post<httpResponse>('http://localhost:3000/register', user, {headers : headers});
  }

  authenticateUser(user : any){
    let headers = new HttpHeaders({'Content-Type': 'application/json', "Accept": "application/json"});
    return this.http.post<httpResponse>('http://localhost:3000/login', user, {headers : headers});
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      "Accept": "application/json",
      'Authorization' : this.authToken ? this.authToken : "noauth"
    });
    
    return this.http.get<httpResponse>('http://localhost:3000/profile', { headers : headers  });
  }

  storeUserData(token:any,user:any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    window.location.reload();
  }
  
  loggedIn(){
    return !this.jwtHelper.isTokenExpired();
  }

  admin(){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      "Accept": "application/json",
      'Authorization' : this.authToken ? this.authToken : "noauth"
    });
    console.log(this.http.get<httpResponse>('http://localhost:3000/dashboard', { headers : headers  }))
    return this.http.get<httpResponse>('http://localhost:3000/dashboard', { headers : headers  });
  }


}
