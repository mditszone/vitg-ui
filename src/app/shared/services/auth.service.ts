import { Injectable } from "@angular/core";


// require jwt token public jwtHelper: JwtHelperService


@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('staff_dto');
    if (token) return true;
    else return false;
  }

}