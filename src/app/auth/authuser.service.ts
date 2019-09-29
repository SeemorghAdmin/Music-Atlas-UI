import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard3 implements CanActivate {

  

  constructor(private router: Router, private http: HttpClient) {
  }
  val;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
         
        this.http.get('http://178.22.123.86/maapi/api/UserProfile').subscribe(res => {
            this.val = res;
                
        });
      if (this.val.userRoleID == 1 )
        {
         return true;
        }
      else {
        this.router.navigate(['/user/login']);
        return false;
      }

  }
}