import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
state;
city;
cityid;
  constructor(public service: UserService, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
    this.service.formModel.reset();
    this.http.get('http://localhost:54277/api/State').subscribe(
      res => {
        this.state = res;
      }
    );
  }

  test(id){
    this.http.get('http://localhost:54277/api/City/' + id).subscribe(
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
          this.toastr.success('ثبت نام انجام شد', 'کاربر ایجاد شد');
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
