import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AfzodanComponent } from './modiritkarbaran/afzodan.component';
import { AfzodanGozaresh } from './modiriatgozaresh/afzodangozaresh.component';
import { UploadComponent } from './upload/upload.component';
import { GozareshComponent } from './modiriatgozaresh/listgozaresh.component';
import { SendMessage } from './modiriatmessage/message.component';
import { MessageService } from './../shared/message.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;
  users;
  useracv
  message;

  constructor(private router: Router, private service: UserService, private messageS: MessageService, private http : HttpClient) { }

  ngOnInit() {
     this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;

       /* this.messageS.getMesaage(this.userDetails.id).subscribe(
          res => {
            this.message = res;
            console.log(res)
          },
          err => {
            console.log(err);
          },
        );*/

         if (this.userDetails.userRoleID == 1 || this.userDetails.userRoleID == 2) {
           this.http.get('http://178.22.123.86/maapi/api/account').subscribe(res => { this.users = res; });

           this.http.get('http://178.22.123.86/maapi/api/ActiveAccount').subscribe(res => { this.useracv = res })
         } 
        
      },
    err => {
      console.log(err);
      },
  ); 
    
    
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
