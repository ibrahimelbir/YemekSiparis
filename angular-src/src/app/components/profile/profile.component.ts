import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any;
  admin: any;
  constructor(
    private authService: AuthService,
    private router : Router,
  ){}

  ngOnInit(){
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.admin = this.user?.admin;
    }, err =>{
      console.log(err);
      return false;
    });
  }
}
