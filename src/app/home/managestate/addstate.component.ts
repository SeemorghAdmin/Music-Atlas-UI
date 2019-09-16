import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateService } from './../../shared/state.service';

@Component({
    selector: 'addstate',
    templateUrl: './addstate.component.html',
    styles: []
})

export class AddState implements OnInit {

    constructor(public service: StateService, private toastr: ToastrService) { }

    ngOnInit() {
        this.service.formModelState.reset();
    }

    onSubmit() {
        //  this.service.formModelReport.value.FileUrl = this.response.dbPath
        this.service.Add().subscribe(
            (res: any) => {
                if (res == true) {
                    this.service.formModelState.reset();
                    this.toastr.success('ثبت نام شد');
                } else {
                    this.toastr.error('نام نوع ساز تکراری است', 'ثبت انجام نشد');
                }

            }

        );
    }

}
