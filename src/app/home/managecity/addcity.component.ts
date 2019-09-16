import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityServices } from '../../shared/citys.service';

@Component({
    selector: 'addcity',
    templateUrl: './addcity.component.html',
    styles: []
})

export class Addcity implements OnInit {

    constructor(public service: CityServices, private toastr: ToastrService) { }

    ngOnInit() {
        this.service.formModelCity.reset();
    }

    onSubmit() {
        this.service.formModelCity.value.State_ID = '';
        this.service.Add().subscribe(
            (res: any) => {
                if (res == true) {
                    this.service.formModelCity.reset();
                    this.toastr.success('ثبت نام شد');
                } else {
                    this.toastr.error('نام شهر تکراری است', 'ثبت انجام نشد');
                }

            }

        );
    }

}
