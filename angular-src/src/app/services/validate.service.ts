import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user : any){
    if( user.name == undefined || user.surname == undefined || user.adress == undefined || user.birthdate == undefined){
        return false;
    } else {
      return true;
    }
  }
  validateEmail(email : any){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }
  validateProduct(data:any){
    if( data.name == undefined || data.category == undefined || data.description == undefined ||  data.price == undefined || data.time == undefined || data.image == undefined){
      return false;
    }else{
      if((this.checkNum(data.price)) && (this.checkNum(data.time)))
        return true;
      return false;
    }
  }
  validateCategory(data:any){
    if( data.name == undefined)
      return false
    return true
  }
  checkNum(string:any) {
    return /^[0-9]+$/.test(string);
  }
}
