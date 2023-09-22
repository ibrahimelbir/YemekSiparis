import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashService } from 'simple-flash-message';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name : String;
  surname : String;
  email : String;
  password : String;
  adress  : String;
  birthdate : Date;

  constructor(private validateService: ValidateService, private flashMessage: FlashService, private authService:AuthService, private router:Router){}
  ngOnInit(){}
  
  onRegisterSubmit(){
    const user ={
      email: this.email,
      name: this.name,
      surname: this.surname,
      password: this.password,
      adress: this.adress,
      birthdate: this.birthdate
    };
    // Validate Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.showFlash("error", "Kontrol Hatası", "Tüm alanlar doldurulmalıdır.")
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.showFlash("error", "Email Hatası", "Email adresi doğru şekilde girilmelidir.")
      return false;
    }
    this.authService.registerUser(user).subscribe(data => {
      
      if(data.success){
        this.flashMessage.showFlash("success", "Başarılı", "Kaydınız başarıyla tamamnlandı. Sisteme giriş yapabilirsiniz.");
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.showFlash("error", "Hata", "Oops. Bir şeyler yanlış gitti.");
        this.router.navigate(['/register']);
      }
    })
    return true;
  }
}
