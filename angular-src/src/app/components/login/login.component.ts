import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashService } from 'simple-flash-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email    : String;
  password : String;

  constructor(
    private authService : AuthService,
    private router: Router,
    private flashMessage : FlashService
    ){}

  ngOnInit(){}
  onLoginSubmit(){
    const user = {
      email: this.email,
      password : this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.showFlash("success", "Başarılı!", "Başarıyla giriş yapıldı.")
        this.router.navigate(['profile']);

      }else{
        this.flashMessage.showFlash("error", "Hata!", data.msg);
        this.router.navigate(['login']);
      }
    });
  }
}
