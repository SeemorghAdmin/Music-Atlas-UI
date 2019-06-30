import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
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
