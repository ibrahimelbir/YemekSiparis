import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user : any;
  constructor(
    private authService: AuthService,
    private router : Router,
    ){}
  ngOnInit(){

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, err =>{
      console.log(err);
      return false;
    });
  }
  
}
