import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { httpResponse } from './httpResponse';
import { AuthService } from './auth.service';
import { AnyArray } from 'mongoose';
@Injectable({
  providedIn: 'root',
})
export class ManageService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private authService: AuthService
  ) {}
  
  getAllProduct() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<httpResponse>(
      'http://localhost:3000/dashboard/product/list',
      { headers: headers }
    );
  }

  deleteProduct(id: any) {
    console.log(id)
    let opts = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.authService.authToken
          ? this.authService.authToken
          : 'noauth',
      }),
      body: {
        id : id
      }
    };
    return this.http.delete<httpResponse>(
      'http://localhost:3000/dashboard/product/delete',
      opts
    );
  }
  editProduct(id: any, data:any) {
    let  headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.authService.authToken
          ? this.authService.authToken
          : 'noauth',
      })
    
    return this.http.post<httpResponse>(
      'http://localhost:3000/dashboard/product/edit',
      data, {headers: headers}
    );
  }


  getAllCategory() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.get<httpResponse>(
      'http://localhost:3000/dashboard/category/list',
      { headers: headers }
    );  
  }
  getUser(id: any) {
    let  headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.authService.authToken
          ? this.authService.authToken
          : 'noauth',
      })
    
    return this.http.post<httpResponse>(
      'http://localhost:3000/dashboard/user',
      {id:id}, {headers: headers}
    );
  }

  getAllOrders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.authService.authToken
        ? this.authService.authToken
        : 'noauth',
    });
    return this.http.post<httpResponse>(
      'http://localhost:3000/dashboard/order/list',{},{headers:headers}
    );  
  }
  
  editCategory(id: any, data:any) {
    let  headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.authService.authToken
          ? this.authService.authToken
          : 'noauth',
      })
    
    return this.http.post<httpResponse>(
      'http://localhost:3000/dashboard/category/edit',
      data, {headers: headers}
    );
  }

  editOrder(id: any, data:any) {
    let  headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.authService.authToken
          ? this.authService.authToken
          : 'noauth',
      })
    
    return this.http.post<httpResponse>(
      'http://localhost:3000/dashboard/order/edit',
      data, {headers: headers}
    );
  }
}
