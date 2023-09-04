import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { httpResponse } from '../components/register/registerResponse';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken : any;
  response : {};
  constructor(private http:HttpClient) { }
  registerUser(user:any){
    let headers = new HttpHeaders({'Content-Type': 'application/json', "Accept": "application/json"});
    return this.http.post<httpResponse>('http://localhost:3000/register', user, {headers : headers});

  }
}
