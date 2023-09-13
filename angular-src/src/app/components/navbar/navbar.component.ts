import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
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
  someSubscription: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    });
  }
  ngOnInit() {
    
  }
  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
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
    return this.authService.admins().subscribe((res) => {
      if (res) {
        return true;
      } else {
        this.router.navigate(['/profile']);
        return false;
      }
    });
    
  }
}
