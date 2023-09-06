import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashService } from 'simple-flash-message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBowlFood = faBowlFood;
  constructor(
    public authService : AuthService,
    private router: Router,
    private flashMessage : FlashService
  ){}
  ngOnInit(){}
  onLogoutClick(){
     this.authService.logout();
     this.flashMessage.showFlash('success', 'Başarılı!', "Başarıyla çıkış yapıldı.")
  }
}
