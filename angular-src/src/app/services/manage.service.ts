import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { httpResponse } from './httpResponse';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ManageService {
  
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private authService: AuthService) { }
  getAllProduct(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept'      : 'application/json',
    });
    return this.http.get<httpResponse>(
      'http://localhost:3000/dashboard/product/list',
      { headers: headers }
    );
  }
}
