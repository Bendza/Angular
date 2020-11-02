import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(private userservice: UserService, private routerService: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userservice.LoggedinUser) {
      return true
    }
    const user = JSON.parse(localStorage.getItem('user')) as User;
    if (user){
      this.userservice.LoggedinUser = user;
      return true
    }
    this.routerService.navigate(['login']);
    return false


  }

}
