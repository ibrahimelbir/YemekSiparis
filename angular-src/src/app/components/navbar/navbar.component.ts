import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashService } from 'simple-flash-message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  admin:boolean;
  isLoggedIn = false;
  faBowlFood = faBowlFood;
  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashService
  ) {

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedIn = this.authService.loggedIn()
      }
    })
    let data = JSON.parse(localStorage.getItem('user') || '{"admin": false}')
    this.admin = data.admin;
  }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.showFlash(
      'success',
      'Başarılı!',
      'Başarıyla çıkış yapıldı.'
    );
  }
  getAdmin() {
    return this.authService.admin().subscribe((res) => {
      if (res) {
        return true;
      } else {
        this.router.navigate(['/profile']);
        return false;
      }
    });
    
  }
}
