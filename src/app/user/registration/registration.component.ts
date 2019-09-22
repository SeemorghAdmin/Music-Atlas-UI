import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { DialogComponent } from './popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
state;
city;
cityid;
  constructor(public service: UserService, private toastr: ToastrService, private http: HttpClient, private dialg: MatDialog, private router: Router) { }

  ngOnInit() {
    this.service.formModel.reset();
    this.http.get('http://178.22.123.86/maapi/api/State').subscribe(
      res => {
        this.state = res;
      }
    );
  }

  test(id){
    this.http.get('http://178.22.123.86/maapi/api/City/' + id).subscribe(
      res => {
        this.city = res;
      }
    );
  }
  test1(id){
    this.cityid = id;
  }

  onSubmit() {
    this.service.formModel.value.City_ID = this.cityid;
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('مشخصات شما در سایت ثبت شد پس از تایید مدیریت سایت، امکان ورود شما ممکن خواهد بود.');
          this.router.navigate(['/homepage']);
        } else if (res == false) {
          this.toastr.error('کد ملی تکراری است');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('نام کاریری تکراری است','ثبت نام انجام نشد');
                break;

              default:
              this.toastr.error(element.description,'ثبت نام انجام نشد');
                break;
            }
          });
        }

       
      },
      err => {
        console.log(err);
      }
    );
  }

}
