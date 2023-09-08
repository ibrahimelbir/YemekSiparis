import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: "root"})
export class AdminGuard{
    constructor(
        private authService:AuthService,
        private router:Router
    ){}

    canActivate(){
        if(this.authService.admin()){
            return true;
        }else{
            this.router.navigate(['profile']);
            return false;
        }
    }

}
