import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard{
    constructor(
        private authService:AuthService,
        private router:Router
    ){}

    canActivate(){
        if(this.authService.loggedIn()){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }
    canAdmin(){
        if(this.authService.admin()){
            return true;
        }else{
            this.router.navigate(['profile']);
            return false;
        }
    }

}
