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
  constructor(
    private authService: AuthService,
    private router : Router,
  ){}

  ngOnInit(){
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, err =>{
      console.log(err);
      console.log(123124)
      return false;
    });
  }
}
